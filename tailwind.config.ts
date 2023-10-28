import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [],
  theme: {
    extend: {
      colors: {
        // Pour le light theme
        primary: "#f3f4f6",

        // Pour le dark mode, utilisez la clé `dark` :
        dark: {
          primary: "#1f2937",
        },
      },
    },
  },
};
export default config;
