import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#FFFFFF',
        lavender: '#E6E6FA',
        stone: '#6E7271',
        indigoDeep: '#4B0082'
      },
      fontFamily: {
        display: ['Montserrat','ui-sans-serif','system-ui','sans-serif']
      }
    }
  },
  plugins: []
}
export default config
