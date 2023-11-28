import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //Fondo
        "themed-blue": "#2a3447",
        "soft-blue": "#384256",
        "dark-blue": "#222b33",
        //Texto
        "main-color": "#ffffff",
        "soft-color": "#ddd",
        "dark-color": "#2a3447",
      },
    },
  },
  plugins: [],
};
export default config;
