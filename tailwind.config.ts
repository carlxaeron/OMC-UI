import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        md: "0 2px 6px -1px rgb(0 0 0 / 0.1), 0 0px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
});

export default config;