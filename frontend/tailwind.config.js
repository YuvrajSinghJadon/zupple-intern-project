/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F253A",
        purple: "#242E4C",
        text: "#97A5CE",
        inputText: "#7D7A9E",
      },
    },
  },
  plugins: [],
};
