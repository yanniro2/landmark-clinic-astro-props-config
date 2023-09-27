/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      lineHeight: {
        "extra-relaxed": "1.75",
        12: "3rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#202325",
      grey: "#8F9192",
      blue: "#22577A",
      green: "#57CC99",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
