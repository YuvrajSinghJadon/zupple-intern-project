/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C2340",
        purple: "#242E4C",
        text: "#97A5CE",
        inputText: "#7D7A9E",
        customBlue: "#002D62",
        sapphire: "#1E2952",
        secondry: "#1e202e",
        // tertiary: '#26293b',
      },
    },
  },
  plugins: [],
};
