import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import siteConfig from '@/content/site-config.json'

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how we can help bring your vision to life. Get in touch today for a free consultation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

