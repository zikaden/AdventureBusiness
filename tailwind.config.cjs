/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#DAF7DE",
        "gray-50": "#AACCAE",
        "gray-100": "#93AA95",
        "gray-500": "#304730",
        "primary-100": "#BCE2C4",
        "primary-300": "#96E2A8",
        "primary-500": "#5FE07E",
        "secondary-400": "#E2DA4B",
        "secondary-500": "#C9C04B",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/sittinghicker.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/logo_background.png')",
        abstractwaves: "url('./assets/wave.png')",
        sparkles: "url('./assets/shapes.png')",
        circles: "url('./assets/showprint.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
