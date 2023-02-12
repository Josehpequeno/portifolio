/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#192432",
        secundary: "#FFFAE0",
        terciary: "#1bdcaf"
      },
      fontFamily: {
        'open-sans': ['"Open Sans"'],
      },
    }
  },
  plugins: []
};
