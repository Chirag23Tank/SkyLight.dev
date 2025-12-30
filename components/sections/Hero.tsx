'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import siteConfig from '@/content/site-config.json'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

