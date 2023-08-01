/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d5d4db",
          200: "#aaa9b7",
          300: "#807e92",
          400: "#55536e",
          500: "#2b284a",
          600: "#22203b",
          700: "#1a182c",
          800: "#11101e",
          900: "#09080f",
        },
        secondary: {
          100: "#ecf8fb",
          200: "#d9f0f6",
          300: "#c7e9f2",
          400: "#b4e1ed",
          500: "#a1dae9",
          600: "#81aeba",
          700: "#61838c",
          800: "#40575d",
          900: "#202c2f",
        },
      },
    },
  },
  plugins: [],
};
