// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#F8F4E1",
            foreground: "#ffffff",
            focus: "#F8F4E1",
            default: {
              DEFAULT: "#AF8F6F",
              foreground: "#000000",
            },
            primary: {
              DEFAULT: "#543310",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#74512D",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
