/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
