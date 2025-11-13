'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaAward, FaLightbulb, FaHeart, FaQuoteLeft } from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ backgroundColor: '#3D4A3D' }}>
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-bebas)',
                color: '#3D4A3D',
                textShadow: `
                  -1px -1px 0 white,
                  1px -1px 0 white,
                  -1px 1px 0 white,
                  1px 1px 0 white
                `
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About
            </motion.h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 rounded-2xl transform rotate-3 opacity-20" style={{ background: 'linear-gradient(to bottom right, #D4E5D4, #B8C9B8)' }} />

                {/* Main image container */}
                <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <Image
                    src="/images/IMG_1452.WEBP"
                    alt="Nicholas Ellis - Screenwriter"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Text Content */}
            <AnimatedSection direction="right" className="space-y-6">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Nick Ellis is a Texas-raised screenwriter currently based in LA. In the past decade, he's developed or optioned writing projects with entities including Vertigo Entertainment, The Exchange, Exile Studios, Entertainment 360, Verve Ventures, A+E Studios, Untitled Entertainment, Fortitude International, Funnyboy Films, Chemically Altered Productions, and Billy Porter's Incognegro Productions, attaching directors including Tony-Nominee Scott Ellis (no relation), Stephen Herek, and Ernest Dickerson. He has three features currently being packaged and taken out to market: LA LECHUZA (horror), A HIGH FIVE FOR GLENN BURKE (sports/coming-of-age), and PUMA V ADIDAS (biopic). Prior to writing, he worked as the Creative Executive to Oscar-nominated screenwriters Andrea Berloff (STRAIGHT OUTTA COMPTON) and John Gatins (FLIGHT) during their overall deal at Netflix. Nick is represented by Sean Marks at Marks Law Group.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </>
  )
}
