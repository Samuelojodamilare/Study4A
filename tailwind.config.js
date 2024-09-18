/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#653780",
        secondary: "rgba(210,174,218,0.21060924369747902)",
        bg: {
          hm: "#f6f1f9",
          br: "#EFEDF0",
          pp: "rgba(195, 118, 214, 0.2)",
          ct: "#F5F0F6",
          ft: "#1A0C23",
          form: "rgba(217, 217, 217, 0.56)",
          not: "#F5F5F5",
        },
        text: {
          1: "#666666",
          2: "#333333",
          3: "#000000",
        },
        bd: {
          1: "#BDBDBD",
          2: "#A5A5A5",
          3: "rgba(230, 230, 230, 1)",
        },
      },
      fontFamily: {
        lato: "var(--font-lato)",
        merriweather: "var(--font-merriweather)",
        poppins: "var(--font-poppins)",
      },
      backgroundImage: {
        "circle-gradient-2":
          "linear-gradient(270deg, rgba(234, 224, 243, 0.67) 31.25%, rgba(96, 32, 160, 0.12) 139.29%)",
        "purple-gradient":
          "linear-gradient(95deg, rgba(242,230,252,1) 71%, rgba(252,247,255,1) 100%)",
        "Demo-gradient":
          "linear-gradient(238.5deg, #1D4A76 -13.36%, #5E2F7A 61.12%, #5E2F7A 115.89%)",
        "background-gradient":
          "radial-gradient(131.25% 167.23% at -14.04% -49.58%, rgba(243, 246, 246, 0.5) 44.34%, rgba(231, 204, 238, 0.5) 100%)",
      },
      mixBlendMode: {
        "color-dodge": "color-dodge",
      },
    },
  },
  variants: {
    extend: {
      placeholder: ["focus", "hover"],
    },
  },
  plugins: [],
};
