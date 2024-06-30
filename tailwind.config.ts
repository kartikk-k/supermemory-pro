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
        "background": "#171B1F",
        "background-secondary": "#1F2428",
        "primary": "#369DFD",

        "foreground": "#FFFFFF",
        "foreground-light": "#B8C4C6"
      }
    }
  },
  plugins: [],
};
export default config;
