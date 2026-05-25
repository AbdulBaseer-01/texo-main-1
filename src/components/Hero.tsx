'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Inter, Playfair_Display } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import MarqueeBanner from './Marquee'


const playfair = Playfair_Display({
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const carouselImages = [
  {
    src: '/products/portable/farmhouse/farmhouse-night-1.jpg',
    alt: 'Luxury That Leaves a Lighter Footprint',
    title: 'Sustainable Modular Construction',
    subtitle: 'Eco-friendly prefab structures built with innovative materials and designs'
  },
  {
    src: '/products/prefab/house/main.webp',
    alt: 'Innovative Modular Spaces Crafted to Perfection',
    title: 'Modern Prefab Office Solutions',
    subtitle: 'Custom-designed modular offices engineered for productivity, and scalability'
  },
  {
    src: '/products/portable/farmhouse/farmhouse-white-ai.png',
    alt: 'Precision-Engineered Prefab Structures for Modern Living',
    title: 'Smart Prefabricated Spaces',
    subtitle: 'High-quality prefab buildings combining durability, speed, and architecture'
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <>
    <section className="relative min-h-[calc(100vh-96px)] w-full overflow-hidden bg-black pt-24">
    
      <div className="sr-only">
        <h1>Premium Prefabricated Construction Solutions | Modern Modular Homes</h1>
        <p>
          Leading prefab construction company specializing in sustainable, modular homes and commercial buildings. 
          Experience faster construction times, cost-effective solutions, and eco-friendly building practices with 
          our innovative prefabricated construction technology.
        </p>
      </div>

      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center"
        style={{ y, opacity }}
      >
        <div className="mx-auto w-full max-w-5xl h-full flex flex-col justify-between pt-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${playfair.className} mb-6 text-4xl font-light leading-[1.1] tracking-tight text-white md:text-7xl`}
          >
            {carouselImages[currentSlide].alt}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-linear-to-r from-[#886c46] to-transparent" />
            <p className={`${inter.className} text-xs uppercase tracking-widest text-gray-500`}>
              {carouselImages[currentSlide].title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`${inter.className} group relative overflow-hidden rounded-full bg-[#886c46] px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-[#886c46]/20`}
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`${inter.className} group rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10`}
            >
              Get Free Quote
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>

          
        </div>
      </motion.div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-[#886c46]/10 blur-3xl" />


      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Previous slide"
        >
          <ArrowRight className="h-4 w-4 rotate-180 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all"
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4 text-white" />
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-[#886c46]' 
                : 'w-1.5 bg-white/30 hover:bg-white/50 hover:w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-10 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.div 
              className="h-1.5 w-1.5 rounded-full bg-white/70"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className={`${inter.className} text-[10px] uppercase tracking-widest text-white/50`}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
    <MarqueeBanner />
    </>
  )
}

export default Hero