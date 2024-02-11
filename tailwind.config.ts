import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: {
          dark: "#080f15",
          lightDark: "#14181f",
        },
        white: "#fff",
        black: "#27262E",
        gray: "#747475",
        lightGray: "#B9B8BC",
        bodyGray: "#F8F8F8",
        purple: "#5429FF",
        lightPurple: "#5429FF1A",
      },
      screens: {
        xs: { max: "600px" },
        sm: { max: "900px" },
        md: { max: "1150px" },
        lg: { max: "1439px" },
        xl: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
export default config;
