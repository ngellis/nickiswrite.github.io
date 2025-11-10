'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaEnvelope, FaPen, FaFilm, FaTv } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Nicholas Ellis
              </motion.h1>

              <motion.div
                className="flex items-center justify-center space-x-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="h-px w-12 bg-white/50" />
                <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                  Screenwriter
                </p>
                <div className="h-px w-12 bg-white/50" />
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center justify-center space-x-6 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a
                  href="/contact"
                  className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope size={32} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>
    </>
  )
}
