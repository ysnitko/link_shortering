/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundPosition: {
        "botom-1": "top 75px right calc(100% - 110%)",
      },
      backgroundImage: {
        "main-component-bg": "url('./assets/images/illustration-working.svg')",
        "header-mob": "url('./assets/images/pattern-bg-mobile.png')",
        "bg-boost-desktop": "url('./assets/images/bg-boost-desktop.svg')",
        "bg-shorting": "url('./assets/images/bg-shorten-desktop.svg')",
      },
      backgroundColor: {
        "btn-header-hover": "hsla(180, 66%, 49%, 0.5)",
        "btn-bg": "hsl(180, 66%, 49%)",
        "bg-statistics": "hsla(257, 7%, 63%, 0.2)",
        "bg-card": "hsl(257, 27%, 26%)",
        "bg-footer": "hsl(260, 8%, 14%)",
      },
      colors: {
        "text-clr-primary": "hsl(0, 0%, 75%)",
        "text-clr-headers": "hsl(255, 11%, 22%)",
        "text-clr-maincomponent": "hsl(257, 7%, 63%)",
        "text-btn-hover": "hsl(0, 0%, 100%)",
        "text-header-link-hover": "hsl(0, 0%, 0%)",
        "text-info": "hsl(0, 0%, 17%)",
        "text-shortering": "hsl(180, 66%, 49%)",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
