/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': 'var(--neon-red, #FF3838)',
        'neon-green': 'var(--neon-green, #6DAA3F)',
        'accent-blue': 'var(--accent-blue, #63B8F4)',
        'accent-orange': 'var(--accent-orange, #FFA500)',
        'dark-muted': 'var(--dark-muted, #262626)',
        'border-gray': 'var(--border-gray, #454545)',
        'card-bg': 'var(--card-bg, #222222)',
        'main-bg': 'var(--main-bg, #151515)',
        'secondary-bg': 'var(--secondary-bg, #1C1C1C)',
        'primary-text': 'var(--primary-text, #F5F5F5)',
        'secondary-text': 'var(--secondary-text, #A7A7A7)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Impact', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -4px rgba(255, 56, 56, 0.45), 0 0 10px -2px rgba(255, 56, 56, 0.3)',
        'glow-green': '0 0 25px -4px rgba(109, 170, 63, 0.45), 0 0 10px -2px rgba(109, 170, 63, 0.3)',
        'glow-blue': '0 0 25px -4px rgba(99, 184, 244, 0.45), 0 0 10px -2px rgba(99, 184, 244, 0.3)',
        'glow-orange': '0 0 25px -4px rgba(255, 165, 0, 0.45), 0 0 10px -2px rgba(255, 165, 0, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

