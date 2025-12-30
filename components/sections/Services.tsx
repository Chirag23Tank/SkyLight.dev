'use client'

import { Code, Smartphone, Network } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import servicesData from '@/content/services.json'
import { Service } from '@/types'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { easeOut } from 'framer-motion'
import { useRef } from 'react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  smartphone: Smartphone,
  network: Network,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
}

export default function Services() {
  const services = servicesData.services as Service[]
  const sortedServices = [...services].sort((a, b) => a.order - b.order)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer comprehensive solutions to help your business thrive in the digital world
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {sortedServices.map((service) => {
            const Icon = iconMap[service.icon] || Code
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="flex flex-col hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

