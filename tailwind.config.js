/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '375px',
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        pattern: 'url(./../assets/pattern.svg)',
      },
      colors: {
        turquoise: '#65E2D6',
        'burnt-sienna': '#F96E46',
        jade: '#00A676',
        periwinkle: '#AEADF0',
        'electric-blue': '#1BE7FF',
        jonquil: '#ECC30B',
      },
    },
  },
  plugins: [],
};
