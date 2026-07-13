'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Layers,
  PaintBucket,
  Grid2X2,
  DoorOpen,
  CreditCard,
  LayoutTemplate,
} from 'lucide-react'
import { ProductData } from '@/lib/productsData'

const merri   = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

/* ─────────────────────────────────────────────
   TAB DEFINITIONS
───────────────────────────────────────────── */
const TABS: { key: keyof TechSpecsData; label: string; Icon: React.FC<{ size?: number; className?: string }> }[] = [
  { key: 'architecture',           label: 'Architecture',                  Icon: Building2      },
  { key: 'exteriorWallRoof',       label: 'Exterior Wall & Roof',          Icon: Layers         },
  { key: 'interiorWallCeiling',    label: 'Interior Wall & Ceiling',       Icon: PaintBucket    },
  { key: 'interiorExteriorFloor',  label: 'Interior & Exterior Floor',     Icon: Grid2X2        },
  { key: 'doorsSanitaryElectrical',label: 'Doors, Sanitary & Electrical',  Icon: DoorOpen       },
  { key: 'transitPaymentWarranty', label: 'Transit, Payment & Warranty',   Icon: CreditCard     },
  { key: 'layout2D',               label: '2D Layout',                     Icon: LayoutTemplate },
]

/* ─────────────────────────────────────────────
   TYPES  (also exported so productsData.ts can import)
───────────────────────────────────────────── */
export interface TechSpecRow {
  label: string
  value: string
}

export interface TechSpecSection {
  /** Display images for this tab */
  images: string[]
  /** Spec rows shown below / beside the image */
  specs: TechSpecRow[]
}

export type TechSpecsData = {
  architecture:            TechSpecSection
  exteriorWallRoof:        TechSpecSection
  interiorWallCeiling:     TechSpecSection
  interiorExteriorFloor:   TechSpecSection
  doorsSanitaryElectrical: TechSpecSection
  transitPaymentWarranty:  TechSpecSection
  layout2D:                TechSpecSection
}

interface TechSpecsProps {
  product: ProductData
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function TechSpecs({ product }: TechSpecsProps) {
  const [activeTab, setActiveTab]   = useState<keyof TechSpecsData>('architecture')
  const [imgIndex, setImgIndex]     = useState(0)
  const [imgDirection, setImgDir]   = useState<1 | -1>(1)

  const sectionRef = useRef(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' })

  const techSpecs  = product.techSpecs
  const section    = techSpecs![activeTab]
  const images     = section.images
  const specs      = section.specs

  /* switch tab → reset image index */
  const switchTab = (key: keyof TechSpecsData) => {
    setActiveTab(key)
    setImgIndex(0)
    setImgDir(1)
  }

  /* image navigation */
  const goImage = (dir: 1 | -1) => {
    setImgDir(dir)
    setImgIndex(i => {
      const next = i + dir
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  /* slide variants */
  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-screen bg-black overflow-hidden py-16 sm:py-24 z-999999"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-white via-[#886c46] to-white"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 mb-10 sm:mb-14">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/90"
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`${playfair.className} text-3xl sm:text-4xl font-light leading-tight tracking-tight text-white`}
        >
          Technical{' '}
          <span className="font-bold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent">
            Specifications
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`${merri.className} mt-3 text-sm font-light italic text-white/85 max-w-xl leading-relaxed`}
        >
          Explore detailed material, structural, and layout specifications across every aspect of the project.
        </motion.p>
      </div>

      {/* Main layout: sidebar + content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-14 flex flex-col lg:flex-row gap-4 lg:gap-6">

        {/* ── LEFT: Tab buttons ── */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 shrink-0 lg:w-64 pb-2 lg:pb-0"
        >
          {TABS.map(({ key, label, Icon }, idx) => {
            const isActive = activeTab === key
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + idx * 0.05 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => switchTab(key)}
                className={`group relative flex items-center gap-3 shrink-0 lg:w-full rounded-xl border px-4 py-3.5 my-2 text-left transition-all duration-300
                  ${isActive
                    ? 'border-[#886c46]/50 bg-linear-to-r from-[#886c46]/80 to-[#886c46]/50 text-[#ffffff] shadow-md shadow-[#886c46]/10'
                    : 'border-white/80 bg-white/2 text-white/55 hover:border-[#886c46]/50 hover:bg-[#886c46]/50 hover:text-white/80'
                  }`}
              >
                {/* Active left bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-[#886c46]"
                  />
                )}

                <span className={`shrink-0 transition-colors duration-300 ${isActive ? 'text-[#ffffff]' : 'text-white/35 group-hover:text-[#886c46]/60'}`}>
                  <Icon size={16} />
                </span>
                <span className={`${merri.className} text-xs font-light tracking-wide leading-snug whitespace-nowrap lg:whitespace-normal`}>
                  {label}
                </span>

                {/* Right arrow indicator for active */}
                {isActive && (
                  <ChevronRight size={14} className="ml-auto shrink-0 text-[#ffffff] hidden lg:block" />
                )}
              </motion.button>
            )
          })}
        </motion.aside>

        {/* ── RIGHT: Content panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 min-w-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col xl:flex-row gap-6"
            >
              {/* ── Image viewer ── */}
              <div className="relative flex-1 min-w-0">
                <div className="relative aspect-4/3 xl:aspect-auto xl:h-130 w-full overflow-hidden rounded-2xl bg-black shadow-2xl">

                  {/* Slides */}
                  <AnimatePresence custom={imgDirection} initial={false}>
                    <motion.div
                      key={`${activeTab}-${imgIndex}`}
                      custom={imgDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[imgIndex]}
                        alt={`${TABS.find(t => t.key === activeTab)?.label} — ${imgIndex + 1}`}
                        fill
                        className="object-cover opacity-90"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient veil */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10" />

                  {/* Tab badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`${merri.className} inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-[#886c46]/40 bg-black/60 backdrop-blur-md text-[#886c46] font-light`}>
                      {(() => {
                        const tab = TABS.find(t => t.key === activeTab)
                        if (!tab) return null
                        const Icon = tab.Icon
                        return <><Icon size={10} />{tab.label}</>
                      })()}
                    </span>
                  </div>

                  {/* Image counter watermark */}
                  <div className="absolute bottom-14 right-5 z-10 pointer-events-none">
                    <span className={`${playfair.className} text-6xl font-bold text-white/15`}>
                      {String(imgIndex + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Arrows — only if multiple images */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => goImage(-1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#886c46]/70 hover:border-[#886c46]/50 hover:scale-105"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => goImage(1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#886c46]/70 hover:border-[#886c46]/50 hover:scale-105"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setImgDir(i > imgIndex ? 1 : -1); setImgIndex(i) }}
                            className={`h-1.5 rounded-full transition-all duration-400 border-none
                              ${i === imgIndex ? 'w-6 bg-[#886c46]' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46] z-20" />
                </div>

                {/* Thumbnail strip — only if >1 image */}
                {images.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                    {images.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => { setImgDir(i > imgIndex ? 1 : -1); setImgIndex(i) }}
                        className={`relative shrink-0 h-14 w-20 overflow-hidden rounded-lg border-2 transition-all duration-300
                          ${i === imgIndex
                            ? 'border-[#886c46] shadow-lg shadow-[#886c46]/20'
                            : 'border-black/10 opacity-60 hover:opacity-90 hover:border-[#886c46]/40'
                          }`}
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                        {i === imgIndex && (
                          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-[#886c46] to-[#a8926d]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Specs table ── */}
              {specs.length > 0 && (
                <div className="xl:w-80 shrink-0">
                  {/* Table header */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-0.5 w-8 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/90" />
                    <span className={`${merri.className} text-xs uppercase tracking-[0.2em] text-[#886c46] font-light`}>
                      Specifications
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/18 bg-linear-to-b from-black to-black/2">
                    {specs.map((row, i) => (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className={`flex items-start gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-[#886c46]/50
                          ${i !== specs.length - 1 ? 'border-b border-white/16' : ''}`}
                      >
                        {/* Label */}
                        <span className={`${merri.className} text-xs font-light text-white/85 leading-snug min-w-22.5 shrink-0 pt-0.5`}>
                          {row.label}
                        </span>
                        {/* Value */}
                        <span className={`${merri.className} text-xs font-medium text-white leading-loose`}>
                          {row.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />
    </section>
  )
}