import { fontFamily } from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        "secondary-background": "var(--secondary-background)",
        foreground: "var(--foreground)",
        main: "var(--main)",
        "main-foreground": "var(--main-foreground)",
        border: "var(--border)",
        overlay: "var(--overlay)",
        ring: "var(--ring)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
        accent: {
          pink: "var(--accent-pink)",
          green: "var(--accent-green)",
          teal: "var(--accent-teal)",
          lavender: "var(--accent-lavender)",
          coral: "var(--accent-coral)",
        },
      },
      fontFamily: {
        heading: ["DM Serif Display", ...fontFamily.serif],
        base: ["Manrope", ...fontFamily.sans],
      },
      fontWeight: {
        heading: "var(--font-weight-heading)",
        base: "var(--font-weight-base)",
      },
      borderRadius: {
        base: "var(--radius-base)",
      },
      translate: {
        boxShadowX: "var(--spacing-boxShadowX)",
        boxShadowY: "var(--spacing-boxShadowY)",
        reverseBoxShadowX: "var(--spacing-reverseBoxShadowX)",
        reverseBoxShadowY: "var(--spacing-reverseBoxShadowY)",
      },
      boxShadow: {
        shadow: "var(--shadow-shadow)",
        nav: "var(--shadow-nav)",
        "dark-nav": "var(--shadow-darkNav)",
      },
      maxWidth: {
        container: "var(--spacing-container)",
      },
      animation: {
        marquee: "var(--animate-marquee)",
        "marquee-vertical": "var(--animate-marquee-up)",
        "marquee-secondary": "var(--animate-marquee2)",
      },
      backgroundImage: {
        "grid-70":
          "linear-gradient(to_right,#80808033_1px,transparent_1px), linear-gradient(to_bottom,#80808033_1px,transparent_1px)",
      },
    },
  },
  plugins: [typography],
}
