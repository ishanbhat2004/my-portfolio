import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        silkscreen: ["var(--font-silkscreen)", "monospace"],
      },
      colors: {
        // Warm, professional palette.
        ink: "#0f172a", // slate-900
        subtle: "#475569", // slate-600
        accent: {
          DEFAULT: "#4f46e5", // indigo-600
          soft: "#6366f1", // indigo-500
        },
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [],
};
export default config;
