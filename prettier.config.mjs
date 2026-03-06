/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./styles/globals.css",
  tailwindFunctions: ["cn", "clsx", "cva"],
};

export default config;
