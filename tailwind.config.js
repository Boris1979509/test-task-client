module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Roboto"],
    },
    container: {
      center: true,
      padding: ".9375rem",
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      margin: {
        "-1": "-1px",
      },
    },
  },
  plugins: [],
};
