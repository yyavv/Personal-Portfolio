/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2E294E",
        "custom-orange": "#F46036",
        "custom-green": "#1B998B",
        highlight: "#FFFF00", // Yellow highlight color
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // ...
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
