import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: { DEFAULT: "#0B0B0D", 2: "#16161A" },
        bone: { DEFAULT: "#F4F1EA", 2: "#EAE5DA" },
        gold: "#A39A86",
        // Product accents: only ever used inside that product's own card or page.
        vendorroll: { DEFAULT: "#068665", dark: "#3CC9A0", ink: "#0D5B45" },
        copper: { DEFAULT: "#B87333", ink: "#8A5322" },
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
} satisfies Config;
