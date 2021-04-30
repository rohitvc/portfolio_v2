module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight: {
      90: "90%",
      "4/6": "66vh",
    },
    minHeight: {
      35: "35rem",
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
