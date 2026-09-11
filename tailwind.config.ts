import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
    extend: {
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Two grounds only — ink and cream — alternating by section.
        ink: {
          DEFAULT: "#0E0F12",
          well: "#1A1D22",
          raised: "#23272D",
          rule: "#2A2F36",
          "rule-strong": "#3A4048",
          body: "#C3CAD1",
          muted: "#9AA3AB",
          faint: "#7D858D",
        },
        cream: {
          DEFAULT: "#F5F2EA",
          body: "#5B6167",
          rule: "rgba(14,15,18,0.16)",
          "rule-strong": "rgba(14,15,18,0.25)",
        },
        // The only accent. Never a gradient.
        signal: {
          DEFAULT: "#8FB3C7",
          cream: "#2F6D8F",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wipe-up": {
          from: { clipPath: "inset(100% 0 0 0)", transform: "translateY(8px)" },
          to: { clipPath: "inset(-20% 0 0 0)", transform: "translateY(0)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "draw-x": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "scan-beam": {
          "0%, 100%": { transform: "translateY(0%)", opacity: "0.4" },
          "50%": { transform: "translateY(280%)", opacity: "0.9" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wipe-up": "wipe-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) both",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "draw-x": "draw-x 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 38s linear infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        "scan-beam": "scan-beam 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
