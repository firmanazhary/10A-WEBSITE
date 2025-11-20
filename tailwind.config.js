/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        '13p': '0.13em',
      },
      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up 15s linear infinite",
        "scroll-down": "scroll-down 15s linear infinite",
      },
      fontFamily: {
        jakarta: "Plus Jakarta Sans",
         proximaBlack: ['ProximaNovaBlack', 'sans-serif'],
         poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
