import { Metadata } from 'next'
import { Code, Smartphone, Network } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import servicesData from '@/content/services.json'
import { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our comprehensive services: Web Development, Mobile Apps, and Networking Solutions',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  smartphone: Smartphone,
  network: Network,
}

export default function ServicesPage() {
  const services = servicesData.services as Service[]
  const sortedServices = [...services].sort((a, b) => a.order - b.order)

  return (
    <div className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive solutions to help your business thrive in the digital world
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedServices.map((service) => {
            const Icon = iconMap[service.icon] || Code
            return (
              <Card key={service.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Have a custom project in mind? Let's discuss how we can help.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

