/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '375px',
      ss: '640px',
      sm: "768px",
      md: "1060px",
      lg: "1200px"
    },

    colors: {
      bacground: '#000000'

    }
  },
  plugins: [],
}

