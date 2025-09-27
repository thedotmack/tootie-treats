const { fontFamily } = require("tailwindcss/defaultTheme")
const typography = require("@tailwindcss/typography")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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
        heading: ["Righteous", ...fontFamily.sans],
        base: ["Space Grotesk", ...fontFamily.sans],
        display: ["Bebas Neue", ...fontFamily.sans],
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
        "scroll-left": "scroll-left 15s linear infinite",
        "liquid-morph": "liquid-morph 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float-random": "float-random 10s ease-in-out infinite",
        "chromatic": "chromatic-aberration 2s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-70":
          "linear-gradient(to_right,#80808033_1px,transparent_1px), linear-gradient(to_bottom,#80808033_1px,transparent_1px)",
        "psychedelic-gradient":
          "linear-gradient(45deg, #ff00ff, #00ffff, #ff1493, #00ff88, #9d4edd, #ff6b35)",
        "wavy-gradient":
          "radial-gradient(circle at 20% 50%, rgba(255,0,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(157,78,221,0.3) 0%, transparent 50%)",
      },
      backdropFilter: {
        'blur-xl': 'blur(20px)',
        'blur-2xl': 'blur(40px)',
      },
    },
  },
  plugins: [typography],
}
