import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nuit: {
          DEFAULT: "#0A0F1E",
          light: "#0D1526",
          card: "#0F1729",
          border: "#1E293B",
        },
        hacker: {
          DEFAULT: "#2563EB",
          dim: "#1D4ED8",
          glow: "#3B82F6",
        },
        texte: {
          DEFAULT: "#E2E8F0",
          muted: "#94A3B8",
          dim: "#475569",
        },
        // Couleurs thématiques
        forge: "#4ADE80",
        ame: "#FACC15",
        miroir: "#F472B6",
        envers: "#FB923C",
      },
      fontFamily: {
        display: ["VT323", "monospace"],
        title: ["var(--font-geist-sans)", "sans-serif"],
        body: ["var(--font-geist-sans)", "sans-serif"],
        ui: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-blueprint":
          "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
        "grid-fine":
          "linear-gradient(rgba(37,99,235,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
        "grid-sm": "32px 32px",
      },
      animation: {
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite alternate",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "scanline": "scanline 8s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%": {
            textShadow:
              "0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.2)",
          },
          "100%": {
            textShadow:
              "0 0 40px rgba(37,99,235,0.8), 0 0 80px rgba(37,99,235,0.4), 0 0 120px rgba(37,99,235,0.2)",
          },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
