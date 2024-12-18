/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primer: "#1e3b42",
        second: "#1c1d31",
        third: "#10b8eb",
        fourth: "#074aac",
        fifth: "#afe3f6",
        six: "#e2f5fc",
        seven: "#d0eaf8",
      },
      maxWidth:{
        "8xl" : "85rem",
      },
      fontFamily:{
        awsome : "FontAwesome",
      },
    },
  },
  plugins: [],
}

