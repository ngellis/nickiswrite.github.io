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

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              My Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Core principles that guide every project I undertake
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaLightbulb className="text-3xl text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                  Creativity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project receives fresh, innovative ideas that push creative boundaries while staying true to the core vision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="text-3xl text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional-grade screenplays crafted with meticulous attention to structure, character, and dialogue.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-3xl text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                  Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Working closely with you throughout the process to ensure your vision is authentically captured on the page.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Ready to start your next project? I'd love to hear about your vision and explore how we can bring it to life.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-2xl inline-block px-12 py-4 text-lg"
            >
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
