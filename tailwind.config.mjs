import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
        },
        navy: {
          DEFAULT: "#374151",
          600: "#374151",
          700: "#374151",
        },
        terracotta: {
          400: "#F59E0B",
          500: "#B45309",
          600: "#92400E",
        },
        primary: { DEFAULT: "#374151" },
        accent: { DEFAULT: "#B45309" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0B1120" },
        ink: {
          900: "#111827",
          700: "#374151",
          500: "#6B7280",
        },
      },
      maxWidth: {
        prose: "68ch",
        site: "72rem",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#334155" } },
      },
      fontFamily: {
        display: ["IBM Plex Sans", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
