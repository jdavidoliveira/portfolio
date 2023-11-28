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
        colorChange: {
          '0%': {
            color: '#38bdf8',
          },
          '20%': {
            color: 'rgb(251 113 133)',
          },
          '40%': {
            color: '#a3e635',
          },
          '60%': {
            color: '#ffbcd9',
          },
          '80%': {
            color: '#ffff00',
          },
          '100%': {
            color: '#8b00ff',
          }
        },
        float: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(90deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '75%': {
            transform: 'rotate(270deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          }
        }
      },

      animation: {
        'foguete': 'animarFoguetes1 5s linear infinite',
        'color-change': 'colorChange 5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate': 'rotate 3s step-end infinite',
      },
    },
  },
  plugins: [],
}
export default config
