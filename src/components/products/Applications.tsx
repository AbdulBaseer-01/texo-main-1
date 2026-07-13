'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { ProductData } from '@/lib/productsData'
import { Lightbulb, ArrowUpRight } from 'lucide-react'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

interface ApplicationsProps {
  product: ProductData
}

export default function Applications({ product }: ApplicationsProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  // If applications don't exist, return null
  if (!product.applications || product.applications.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-white overflow-hidden border-t border-black/5">

      {/* Top decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-6">
            {/* Icon box */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}
              className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
            >
              <Lightbulb className="w-8 h-8 text-white" strokeWidth={1.5} />
            </motion.div>

            <div className="flex-1">
              {/* Accent rule */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '64px' } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}
              >
                Operational Applications
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`${merri.className} text-black/60 font-light text-lg max-w-2xl`}
              >
                Discover how the {product.name} transforms diverse environments and use cases with innovative solutions.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64 border border-black/10 group-hover:border-[#886c46]/50 transition-all duration-500">
                <div className="relative w-full h-full bg-linear-to-br from-[#886c46]/10 to-black/5">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={app.image}
                      alt={app.heading}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`${playfair.className} text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 rounded-2xl bg-linear-to-br from-black/2 to-black/4 border border-black/10 group-hover:border-[#886c46]/50 transition-all duration-500">
                <h3 className={`${playfair.className} text-2xl font-semibold text-black mb-3 group-hover:text-[#886c46] transition-colors duration-300`}>
                  {app.heading}
                </h3>

                <p className={`${merri.className} text-black/60 font-light text-sm leading-relaxed mb-5`}>
                  {app.description}
                </p>

                {/* Bottom accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="h-0.5 w-12 origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />
    </section>
  )
}
