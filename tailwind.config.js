// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#212529",
        section: {
          200: "#343a40",
          900: "#2b3035",
        },
        nav: { 700: "#1995d9", 900: "#157bb3" },
      },
      borderColor: {
        translucent: "#343a40",
      },
    },
  },
  plugins: [],
};
