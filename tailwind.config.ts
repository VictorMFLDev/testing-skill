import type { Config } from "tailwindcss";

export default {
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
        yellowPrimary01: "var(--yellowPrimary)",
        yellowLinks: "var(--yellowLinks)",
        white: "var(--white)",
        red01: "var(--red01)",
      },
    },
  },
  plugins: [],
} satisfies Config;
