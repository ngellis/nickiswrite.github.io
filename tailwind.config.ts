import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169E1', // Royal Blue
          50: '#EBF0FE',
          100: '#D7E1FD',
          200: '#AFC3FB',
          300: '#87A5F9',
          400: '#5F87F7',
          500: '#4169E1', // Main royal blue
          600: '#1E4EC8',
          700: '#163A96',
          800: '#0F2764',
          900: '#071332',
        },
        accent: {
          DEFAULT: '#F8FAFC',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
