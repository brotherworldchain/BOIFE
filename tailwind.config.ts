import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fc8e03",
        p_green: "#28443F",
        p_black: "#1E1E1E",
        bg_gray: "#F7F7F8",
        secondary: "#ffd302",
        bg_orange: "#ff5c01",
      },
    },
  },
  plugins: [],
};
export default config;
