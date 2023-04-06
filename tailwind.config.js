/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F8FAFC',
        'gray-200': '#E2E8F0',
        'gray-300': '#94A3B8',
        'gray-400': '#475569',
        'gray-500': '#1E293B',
        'gray-600': '#0F172A',
        'purple': '#7C3AED'
      },
      width: {
        '24': '24rem',
        '30': '35rem'
      },
      height: {
        '3.5': '3.5rem'
      },
      gap: {
        '13': '13rem'
      },
    },
  },
  plugins: [],
}

