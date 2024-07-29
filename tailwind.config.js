/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "safety-orange": "hsl(25, 100%, 50%)",
        "lavender-gray": "hsl(230, 19%, 81%)",
        "persian-rose": "hsl(328, 100%, 59%)",
        "red-crayola": "hsl(341, 100%, 49%)",
        "eerie-black": "hsl(240, 6%, 10%)",
        "light-gray": "hsl(0, 0%, 80%)",
        "cultured-2": "hsl(210, 60%, 98%)",
        platinum: "hsl(0, 0%, 90%)",
        "gray-web": "hsl(220, 5%, 49%)",
        cultured: "hsl(0, 0%, 93%)",
        "black-10": "hsla(0, 0%, 0%, 0.1)",
        "black-5": "hsla(0, 0%, 0%, 0.05)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 14%, 98%)",
        black: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
