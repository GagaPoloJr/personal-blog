/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      autoprefixer: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
    }
  ],
  darkMode: 'class'
}
