import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "neon-red": "#ff0040",
        "neon-crimson": "#dc143c",
        "neon-burgundy": "#800020",
        "dark-red": "#1a0005",
        "darker-red": "#0f0003",
        "cyber-gray": "#2a0a0a",
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        code: ["Source Code Pro", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #ff0040, 0 0 10px #ff0040, 0 0 15px #ff0040",
          },
          "50%": {
            boxShadow: "0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040",
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      animation: {
        glitch: "glitch 0.3s linear infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
