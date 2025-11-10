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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              A passion for storytelling, a dedication to craft
            </motion.p>
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
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-3 opacity-20" />

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
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Bringing Stories to Life
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6" />
              </div>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  With a deep passion for storytelling and years of experience in the industry, I specialize in crafting screenplays that resonate with audiences and bring creative visions to life.
                </p>

                <p>
                  My approach combines technical expertise with emotional depth, ensuring every script I write is not only professionally formatted but also compelling, authentic, and ready for production.
                </p>

                <p>
                  Whether developing original concepts, adapting existing material, or providing script consulting services, I'm dedicated to helping filmmakers and content creators tell their stories in the most powerful way possible.
                </p>
              </div>

              {/* Quote */}
              <div className="relative bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <FaQuoteLeft className="absolute top-4 left-4 text-primary opacity-20 text-3xl" />
                <p className="italic text-gray-800 pl-8 leading-relaxed">
                  "Every great film starts with a great script. My mission is to create stories that not only entertain but also inspire and move audiences."
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Let's Work Together
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </>
  )
}
