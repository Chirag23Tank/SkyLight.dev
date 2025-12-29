import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import testimonialsData from '@/content/testimonials.json'
import { Testimonial } from '@/types'

export default function Testimonials() {
  const testimonials = testimonialsData.testimonials as Testimonial[]
  const featuredTestimonials = [...testimonials]
    .filter(t => t.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardContent className="p-6">
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating!
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.clientName}</p>
                  {testimonial.clientCompany && (
                    <p className="text-sm text-gray-600">{testimonial.clientCompany}</p>
                  )}
                  {testimonial.clientRole && (
                    <p className="text-xs text-gray-500">{testimonial.clientRole}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

