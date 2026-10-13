/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Manrope", "sans-serif"],
        titleFont: ["Syne", "sans-serif"],
      },
      colors: {
        bodyColor: "#0c0e12",
        surface: "#14171d",
        lightText: "#9aa3b2",
        designColor: "#5eead4",
      },
      boxShadow: {
        shadowOne: "0 1px 0 rgba(255,255,255,0.04), 0 12px 40px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        mesh: "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(94,234,212,0.12), transparent 50%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(56,189,248,0.08), transparent 45%), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(94,234,212,0.06), transparent 40%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        floatSoft: "floatSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
