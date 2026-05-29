import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F3EFE8",
          100: "#E9E5DF",
          200: "#DBD7D1",
        },
        terracotta: {
          400: "#A04F16",
          500: "#8B4513",
          600: "#723910",
        },
        primary: { DEFAULT: "#374151" },
        accent: { DEFAULT: "#8B4513" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#1C1917" },
        ink: {
          900: "#0B1120",
          700: "#334155",
          500: "#64748B",
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
        display: ['Roboto Slab', "Georgia", "serif"],
        sans: ['Barlow', "system-ui", "sans-serif"],
        body: ['Barlow', "sans-serif"],
        mono: ['IBM Plex Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
