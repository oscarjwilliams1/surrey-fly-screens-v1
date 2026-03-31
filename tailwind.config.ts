import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0f9f4',
          100: '#daf1e5',
          200: '#b8e2cd',
          300: '#87ccab',
          400: '#52b082',
          500: '#2d9462',
          600: '#1f7a4e',
          700: '#1a6140',
          800: '#174e35',
          900: '#14402d',
          950: '#0a2419',
        },
        stone: {
          50:  '#fafaf9',
          100: '#f5f4f0',
          200: '#e8e6df',
          300: '#d4d0c5',
          400: '#b9b4a4',
          500: '#a09988',
          600: '#8d8471',
          700: '#746c5c',
          800: '#5e584c',
          900: '#4d4840',
          950: '#292520',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
