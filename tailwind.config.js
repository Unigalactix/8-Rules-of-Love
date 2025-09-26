/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'book-burgundy': '#8B2635',
        'book-gold': '#D4AF37',
        'book-cream': '#F5F5DC',
        'book-sage': '#87A96B',
        'book-terracotta': '#C65D07',
        'book-rose': '#E8B4B8',
        'book-navy': '#2C3E50',
        'book-bronze': '#CD7F32',
        'book-ivory': '#FFFFF0',
        'book-mauve': '#C6A4A4',
        'book-forest': '#355E3B',
        'book-copper': '#B87333'
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Source Sans Pro', 'Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}