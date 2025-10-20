// frontend/tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF'
        },
        secondary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5'
        },
        background: {
          light: '#F9FAFB'
        },
        success: '#10B981',
        error: '#EF4444',
        border: '#E5E7EB'
      }
    },
  },
  plugins: [],
}