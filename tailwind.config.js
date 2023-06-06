/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        akaya: ["Akaya Kanadaka"],
      },
    },
  },
  mode: 'jit',
  darkMode: "class",
  plugins: [],
  daisyui: {
    themes: [ "cupcake"],
  },
}



