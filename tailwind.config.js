/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: "#20C5F8",
          hover: "#62dcfb",
        },
        footerText: "#bbbbbb",
      },
    },
  },
  plugins: [],
};
