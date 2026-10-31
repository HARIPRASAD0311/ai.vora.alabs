/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#03060c',
          900: '#060a14',
          850: '#091020',
          800: '#0e172a',
          700: '#172544',
          600: '#1e325c',
        },
        teal: {
          accent: '#00f5d4',
          glow: '#0df2c8',
          deep: '#0f766e',
        },
        cyan: {
          accent: '#06b6d4',
          glow: '#22d3ee',
        },
        darkCard: 'rgba(15, 23, 42, 0.65)',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        darkBorderHover: 'rgba(0, 245, 212, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 50px -10px rgba(0, 245, 212, 0.25)',
        'glow-cyan': '0 0 60px -15px rgba(6, 182, 212, 0.3)',
        'glow-sm': '0 0 20px -5px rgba(0, 245, 212, 0.2)',
        'glow-pill': '0 0 30px rgba(0, 245, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at 50% -20%, rgba(6, 182, 212, 0.22), transparent 70%)',
        'radial-teal-right': 'radial-gradient(circle at 80% 30%, rgba(0, 245, 212, 0.15), transparent 60%)',
        'radial-cyan-left': 'radial-gradient(circle at 20% 60%, rgba(6, 182, 212, 0.12), transparent 60%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

