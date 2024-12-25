/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'notion-gray': '#F7F6F3',
        'notion-text': '#37352F'
      },
      fontFamily: {
        nhg: ['Neue Haas Grotesk Display Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}