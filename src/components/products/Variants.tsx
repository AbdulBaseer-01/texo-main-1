'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'
import { X, Maximize2, LayoutGrid, Image as ImageIcon, Sofa } from 'lucide-react'
import { ProductData } from '@/lib/productsData'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

// ─── Types ────────────────────────────────────────────────────────────────────

type ViewTab = '2d' | 'gallery' | 'interior'

interface VariantImages {
  '2d': string
  gallery: string[]
  interior: string[]
}

function getVariantImages(variantImage: string): VariantImages {
  return {
    '2d': variantImage,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png'],
    interior: ['/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp'],
  }
}

// ─── Fullscreen Panel ────────────────────────────────────────────────────────

const VariantPanel = ({
  variant,
  onClose,
}: {
  variant: { variantName: string; variantImage: string }
  onClose: () => void
}) => {
  const [activeTab, setActiveTab] = useState<ViewTab>('2d')
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const images = getVariantImages(variant.variantImage)

  const tabs: { key: ViewTab; label: string; icon: React.ReactNode }[] = [
    { key: '2d', label: '2D Layout', icon: <LayoutGrid className="w-4 h-4" /> },
    { key: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { key: 'interior', label: 'Interior View', icon: <Sofa className="w-4 h-4" /> },
  ]

  const currentImages: string[] =
    activeTab === '2d'
      ? [images['2d']]
      : activeTab === 'gallery'
      ? images.gallery
      : images.interior

  // Reset gallery index when tab changes
  const handleTabChange = (tab: ViewTab) => {
    setActiveTab(tab)
    setActiveGalleryIndex(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-99999 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-6"
      onClick={onClose}
    >
      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-6xl bg-[#0d0b08] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/8 shrink-0">
          <div>
            <p className={`${merri.className} text-[0.6rem] uppercase tracking-[0.25em] text-[#886c46] mb-1`}>
              Variant Details
            </p>
            <h2 className={`${playfair.className} text-xl md:text-2xl font-semibold text-white`}>
              {variant.variantName}
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/8">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`${merri.className} relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-light tracking-wide transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[#886c46] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile tab switcher */}
        <div className="md:hidden flex items-center gap-1 mx-4 mt-3 bg-white/5 rounded-full p-1 border border-white/8 shrink-0">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`${merri.className} relative flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[0.6rem] font-light tracking-wide transition-all duration-300 ${
                activeTab === tab.key ? 'text-white' : 'text-white/40'
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="tab-pill-mobile"
                  className="absolute inset-0 bg-[#886c46] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                {tab.icon}
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Content ── */}
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-0 flex flex-col"
            >

              {/* ── 2D Layout: single centered image ── */}
              {activeTab === '2d' && (
                <div className="flex-1 flex items-center justify-center p-6 md:p-10">
                  <div className="relative w-full max-w-3xl aspect-4/3 rounded-xl overflow-hidden border border-white/6">
                    <Image
                      src={images['2d']}
                      alt={`${variant.variantName} — 2D Layout`}
                      fill
                      className="object-contain bg-white/3"
                    />
                    {/* Corner marks to give technical/blueprint feel */}
                    {/* <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#886c46]/40 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#886c46]/40 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#886c46]/40 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#886c46]/40 pointer-events-none" /> */}
                  </div>
                </div>
              )}

              {/* ── Gallery / Interior: main + thumbnails ── */}
              {(activeTab === 'gallery' || activeTab === 'interior') && (
                <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-0">

                  {/* Main image */}
                  <div className="flex-1 relative aspect-4/3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeTab}-${activeGalleryIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentImages[activeGalleryIndex]}
                          alt={`${variant.variantName} — ${activeTab} ${activeGalleryIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                        {/* Subtle gradient bottom */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                        {/* Counter */}
                        <div className={`${merri.className} absolute bottom-4 left-5 text-[0.58rem] tracking-widest uppercase text-white/50`}>
                          {activeGalleryIndex + 1} / {currentImages.length}
                        </div>

                        {/* Nav arrows on main image */}
                        {currentImages.length > 1 && (
                          <>
                            <button
                              onClick={() => setActiveGalleryIndex(i => (i - 1 + currentImages.length) % currentImages.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-[#886c46]/60 hover:bg-[#886c46]/20 transition-all"
                            >
                              <LucideIcons.ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setActiveGalleryIndex(i => (i + 1) % currentImages.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-[#886c46]/60 hover:bg-[#886c46]/20 transition-all"
                            >
                              <LucideIcons.ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Thumbnail strip */}
                  <div className="md:w-28 flex md:flex-col flex-row gap-2 p-3 bg-white/3 border-t md:border-t-0 md:border-l border-white/6 overflow-x-auto md:overflow-y-auto shrink-0">
                    {currentImages.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          idx === activeGalleryIndex
                            ? 'border-[#886c46] shadow-lg shadow-[#886c46]/20'
                            : 'border-transparent opacity-50 hover:opacity-80'
                        }`}
                        style={{ width: '80px', height: '60px' }}
                      >
                        <Image src={src} alt={`thumb-${idx}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer ── */}
        <div className="px-8 py-5 border-t border-white/8 flex items-center justify-between shrink-0">
          <p className={`${merri.className} text-xs font-light text-white/35`}>
            All views are representative. Actual finishes may vary.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`${merri.className} inline-flex items-center gap-2 px-7 py-3 bg-linear-to-r from-[#886c46] to-[#6f5838] text-white rounded-full text-xs font-light tracking-wide shadow-lg shadow-[#886c46]/25`}
          >
            Enquire About This Variant
            <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Top accent line */}
        {/* <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46]/60 to-transparent pointer-events-none" /> */}
      </motion.div>
    </motion.div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface VariantsProps {
  product: ProductData
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Variants({ product }: VariantsProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeVariant, setActiveVariant] = useState<{ variantName: string; variantImage: string } | null>(null)

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">

      {/* Top decorative line */}
      {/* <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      /> */}

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start gap-6">

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}
              className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shadow-xl"
            >
              <LucideIcons.Layers className="w-8 h-8 text-white" />
            </motion.div>

            <div className="flex-1">
              {/* <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '64px' } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 h-1 rounded-full bg-linear-to-r from-[#886c46] to-[#886c46]/40"
              /> */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`${playfair.className} text-4xl md:text-5xl font-semibold text-black mb-4`}
              >
                Available Variants
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`${merri.className} text-black/60 font-light text-lg max-w-2xl`}
              >
                Choose from our carefully curated range of {product.name} variants, each tailored to different needs and preferences.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Variant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.variants.map((variant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-2xl border border-black/20 hover:border-[#886c46]/50 shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={variant.variantImage}
                  alt={variant.variantName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" /> */}

                {/* Hover overlay */}
                {/* <div className="absolute inset-0 bg-[#886c46]/0 group-hover:bg-[#886c46]/10 transition-all duration-500" /> */}

                {/* Expand icon — appears on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom accent bar */}
                {/* <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-[#886c46] via-[#a8926d] to-[#886c46]"
                /> */}
              </div>

              {/* Title + button */}
              <div className="px-6 py-5 bg-white flex items-center justify-between gap-4">
                <h3 className={`${playfair.className} text-xl font-semibold text-black group-hover:text-[#886c46] transition-colors duration-300`}>
                  {variant.variantName}
                </h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveVariant(variant)}
                  className={`${merri.className} shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#886c46]/40 text-[#886c46] text-[0.68rem] font-light tracking-wide hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-300`}
                >
                  View Details
                  <LucideIcons.ArrowUpRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-16 text-center">
        <p className={`${merri.className} text-black font-light text-base`}>
          Don&apos;t see what you&apos;re looking for?{" "}<br />
          <span className={`${playfair.className} italic text-[#886c46] font-medium`}>
            Every variant above is fully customisable
          </span>{" "}
          — reach out and we&apos;ll craft something built precisely around your requirements.
        </p>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#886c46] to-transparent"
      />

      {/* Fullscreen Variant Panel */}
      <AnimatePresence>
        {activeVariant && (
          <VariantPanel
            variant={activeVariant}
            onClose={() => setActiveVariant(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}