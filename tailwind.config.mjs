import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff4d30",
        second: "#000",
        third: "#EEEEEE",
      },
      fontSize: {
        "header": "48px",
        "subheader": "24px",
        "body": "18px",
        "button": "16px",
        "caption": "14px",
      },
      fontFamily: {
				poppins: ["PoppinsRegular", "sans-serif"],
				poppinsBold: ["PoppinsBold", "sans-serif"],
				poppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
				poppinsMedium: ["PoppinsMedium", "sans-serif"],
				poppinsLight: ["PoppinsLight", "sans-serif"],
			},
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
