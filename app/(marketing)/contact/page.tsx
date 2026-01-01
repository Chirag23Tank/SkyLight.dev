import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import siteConfig from '@/content/site-config.json'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Arisotech for your next project',
}

export default function ContactPage() {
  return (
    <div className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {siteConfig.email && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.phone && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.address && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">{siteConfig.address}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

