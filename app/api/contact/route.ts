import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { z } from 'zod'

// Simple in-memory rate limiter (per server instance).
// For production/serverless, replace with a durable store (e.g., Upstash).
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5

function isRateLimited(identifier: string) {
  const now = Date.now()
  const timestamps = rateLimitMap.get(identifier) || []
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  recent.push(now)
  rateLimitMap.set(identifier, recent)
  return false
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(255),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  serviceType: z.enum(['web-development', 'mobile-apps', 'networking', 'consulting', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  budgetRange: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-100k', '100k-plus', 'not-sure']).optional(),
  timeline: z.enum(['asap', '1-3-months', '3-6-months', '6-plus-months']).optional(),
  source: z.string().default('website'),
})

export async function POST(request: NextRequest) {
  try {
    // Basic request size guard (~10KB)
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 10_000) {
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      )
    }

    // Rate limiting by IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'
    if (isRateLimited(`contact_${ip}`)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Simple spam keyword check
    const spamKeywords = ['viagra', 'casino', 'loan', 'click here', 'free money']
    const messageLower = validatedData.message.toLowerCase()
    if (spamKeywords.some((kw) => messageLower.includes(kw))) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Use admin client for server-side operations (bypasses RLS)
    const supabase = createAdminClient()

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company_name: validatedData.companyName,
        service_type: validatedData.serviceType,
        message: validatedData.message,
        budget_range: validatedData.budgetRange,
        timeline: validatedData.timeline,
        source: validatedData.source,
        ip_address: ip,
        user_agent: request.headers.get('user-agent'),
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      // Log error for monitoring (don't expose internal details to client)
      console.error('Supabase error:', {
        code: error.code,
        message: error.message,
      })
      
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      )
    }

    // Success - return minimal data (don't expose internal IDs unnecessarily)
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you! Your message has been received.',
        submissionId: data.id 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

