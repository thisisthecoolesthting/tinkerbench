import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
        },
        terracotta: {
          400: "#475569",
          500: "#1E293B",
          600: "#0F172A",
        },
        primary: { DEFAULT: "#1E293B" },
        accent: { DEFAULT: "#B45309" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#1C1917" },
        ink: {
          900: "#1C1917",
          700: "#4A4340",
          500: "#6E6863",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ['IBM Plex Serif', "Georgia", "serif"],
        sans: ['IBM Plex Sans', "system-ui", "sans-serif"],
        body: ['IBM Plex Sans', "sans-serif"],
        mono: ['IBM Plex Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
