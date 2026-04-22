/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1E293B" },
        accent: { DEFAULT: "#B45309" },
        cream: "#FAF7F0",
        ink: "#1C1917",
      },
      fontFamily: {
        display: ["IBM Plex Serif", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
