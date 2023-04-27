/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      desktop: "url('/images/pattern-background-desktop.svg')",
      mobile: "url('/images/pattern-background-mobile.svg')",
    },
    extend: {
      backgroundColor: {
        main: "hsl(225, 100%, 94%)",
        card: "hsl(225, 100%, 98%)",
        button: "hsl(245, 75%, 52%)",
      },
      textColor: {
        heading: "hsl(223, 47%, 23%)",
        para: "hsl(224, 23%, 55%)",
        link: "hsl(245, 75%, 52%)",
      },

      boxShadow: {
        custom: "20px 10px 10px rgba(56, 41, 224,0.05)",
      },
    },
  },
  plugins: [],
};
