import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Preneurin Brand Colors (from logo)
        primary: "#4a2029", // Deep maroon/burgundy (luxury, trust)
        cream: "#e2ceb0", // Warm cream (elegance, approachability)
        taupe: "#8d6f62", // Earthy taupe (stability)
        accent: "#ad8a70", // Warm light brown (reliability)
        muted: "#a68c94", // Soft mauve (balance)
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      }
    },
  },
  plugins: [],
};
export default config;
