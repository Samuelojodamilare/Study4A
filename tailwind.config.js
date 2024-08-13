/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#653780",
        secondary: "#D2AEDA",
        bg: {
          hm: "#f6f1f9",
          br: "#EFEDF0",
          pp: "#C376D6",
          ct: "#F5F0F6",
        },
        text: {
          1: "#666666",
          2: "#333333",
          3: "#000000",
        },
        bd: {
          1: "#BDBDBD",
          2: "#A5A5A5",
        },
      },
      fontFamily: {
        lato: "var(--font-lato)",
        merriweather: "var(--font-merriweather)",
        poppins: "var(--font-poppins)",
      },
      backgroundImage: {
        "circle-gradient":
          "linear-gradient(90deg, rgba(101,55,128,1) 37%, rgba(241,191,250,1) 100%);",
        "circle-gradient-2":
          "linear-gradient(270deg, rgba(234, 224, 243, 0.67) 31.25%, rgba(96, 32, 160, 0.12) 139.29%)",
        "circle-gradient-3":
          "linear-gradient(270deg, rgba(234,224,243,0.9304971988795518) 51%, rgba(96,32,160,1) 100%)",
        "circle-gradient-4":
          "linear-gradient(270deg, rgba(234,224,243,1) 29%, rgba(191,165,217,1) 71%, rgba(96,32,160,1) 100%)",
      },
    },
  },
  plugins: [],
};
