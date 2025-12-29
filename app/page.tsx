import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import siteConfig from '@/content/site-config.json'

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
