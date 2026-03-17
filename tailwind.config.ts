import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          black: '#0D0D0D',
          white: '#F5F0E8',
          yellow: '#FFE500',
          red: '#FF2D2D',
          blue: '#0066FF',
          green: '#00FF88',
          gray: '#C8C4BB',
        },
      },
      fontFamily: {
        display: ['"Space Mono"', 'monospace'],
        body: ['"IBM Plex Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
} satisfies Config;
