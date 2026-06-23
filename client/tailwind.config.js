import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxsm: "332px",
        xsm: "432px",
        xlplus: "1400px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-fill": (value) => ({
            "-webkit-text-fill-color": value,
          }),
        },
        {
          values: theme("colors"),
        },
      );
    }),
  ],
};
