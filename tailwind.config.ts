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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        archivo: ["Archivo", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        signal: {
          DEFAULT: "#1B2BFF",
          hover: "#1220CC",
        },
        ink: {
          DEFAULT: "#000000",
          muted: "#5C5C5C",
          faint: "#8A8A8A",
        },
        rule: {
          DEFAULT: "#000000",
          light: "#E0E0E0",
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
        "rise": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // Mechanical wipe rather than a soft fade — precision over softness.
        "wipe-up": {
          from: { clipPath: "inset(100% 0 0 0)", transform: "translateY(8px)" },
          to: { clipPath: "inset(-20% 0 0 0)", transform: "translateY(0)" },
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
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "wipe-up": "wipe-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) both",
        "draw-x": "draw-x 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 38s linear infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
