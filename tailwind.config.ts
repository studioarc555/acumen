import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Ensure this is imported for the plugin

const config: Config = {
  content: [
    // This assumes your project structure includes components in the root, app, and pages folders
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // If your components are exclusively in 'src/', you might need './src/**/*.{js,ts,jsx,tsx,mdx}'
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        // Defining colors to be available via classes like `bg-acumen-primary`
        acumen: {
          primary: "hsl(277,72%,26%)", // Your custom purple color
          secondary: "hsl(277,72%,22%)",
          light: "hsl(277,72%,30%)",
        },
        // We assume the use of slate colors is standard Tailwind default.
      },
      fontFamily: {
        // These rely on CSS variables defined in globals.css
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
      },
    },
  },
  // Ensure the tailwindcss-animate package is installed and correctly required
  plugins: [tailwindcssAnimate], 
};

export default config;