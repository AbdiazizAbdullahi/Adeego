/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "vest-b": "Vesterbro Bold",
        "vest-eb": "Vesterbro Extrabold",
        "vest-l": "Vesterbro Light",
        "vest-md": "Vesterbro Medium",
        "vest-ps": "Vesterbro Poster",
        "vest-rg": "Vesterbro Regular",
      },
      colors: {
        "LightGreen": "#B3D5C8",
        "DeepGreen": "#017449",
        "DarkGrey": "#1F1F1F",
        "Cream": "#F2F2F2"
      },
      height: {
        "700": "560px",
        "400": "420px",
        "70": "224px"
      },
      width: {
        "1000": "800px",
        "600": "600px",
        "100": "320px",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}