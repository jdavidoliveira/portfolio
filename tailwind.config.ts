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
        'primary-black': '#1B1E23',
      },
      keyframes: {
        animarFoguetes1: {
          'from': {
            left: '2%',
            top: '100%'

          },
          'to': {
            left: '100%',
            top: '0'
          },
        },
      },

      animation: {
        'foguete': 'animarFoguetes1 5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
