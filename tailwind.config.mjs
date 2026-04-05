/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        accent: "#f97316",
        "bg-dark": "#020617",
        "bg-card": "rgba(15, 23, 42, 0.8)",
        "text-main": "#f8fafc",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        heading: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
