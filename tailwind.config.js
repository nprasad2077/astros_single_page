module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "dark", "business"],
  },
  theme: {
    extend: {
      height: {
        "1/2screen": "50vh",
      },
    },
  },
};
