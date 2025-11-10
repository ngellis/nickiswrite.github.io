'use client'

import Link from 'next/link'
import { FaInstagram, FaEnvelope, FaFilm } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/your_instagram_handle', // Update with actual handle
    color: 'hover:text-pink-500',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: '/contact',
    color: 'hover:text-primary',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <FaFilm className="text-primary text-2xl" />
              <h3 className="text-xl font-display font-bold">Nicholas Ellis</h3>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Professional screenwriter crafting compelling stories for film and television.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 w-fit"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300 w-fit"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300 w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Available for screenwriting projects and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Nicholas Ellis. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
