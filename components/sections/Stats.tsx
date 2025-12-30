
'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, motion, useAnimation, useInView, easeOut } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 20, label: 'Projects Completed', suffix: '+' },
  { value: 25, label: 'Happy Clients', suffix: '+' },
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.2,
      ease: easeOut,
      onUpdate: latest => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [value])

  return <motion.span>{display}{suffix ?? ''}</motion.span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: index * 0.1, ease: 'easeOut' },
                },
              }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2 sm:text-5xl">
                {inView ? <AnimatedNumber value={stat.value} suffix={stat.suffix} /> : `0${stat.suffix ?? ''}`}
              </div>
              <div className="text-blue-100 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

