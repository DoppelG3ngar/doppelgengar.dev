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
        highlight: "var(--color-highlight)",
        background: "var(--color-background)",
        shade: "var(--color-shade)",
        white: "var(--color-white)",
      },
    },
  },
  plugins: [],
};
export default config;
