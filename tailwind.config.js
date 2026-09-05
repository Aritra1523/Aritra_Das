/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0D12",
          50: "#F4F5F7",
          100: "#E5E7EB",
          200: "#C7CBD4",
          300: "#9AA1B0",
          400: "#6B7280",
          500: "#4B5262",
          600: "#343B4A",
          700: "#212632",
          800: "#161A23",
          900: "#0F1219",
          950: "#0A0D12",
        },
        signal: {
          DEFAULT: "#4FD8C4",
          50: "#EEFFFB",
          100: "#D2FBF3",
          200: "#A6F5E7",
          300: "#71E9D6",
          400: "#4FD8C4",
          500: "#2FB8A5",
          600: "#219383",
          700: "#1C766A",
          800: "#195F56",
          900: "#164E48",
        },
        ember: {
          DEFAULT: "#E8916A",
          400: "#EDA985",
          500: "#E8916A",
          600: "#D0754C",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 30px -14px rgba(0,0,0,0.55)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
