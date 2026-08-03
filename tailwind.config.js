/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070B",
        card: "#0D1117",
        "card-border": "#1F293D",
        primary: "#0B6CFF",
        secondary: "#00BFFF",
        "text-light": "#F5F5F5",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(11, 108, 255, 0.4)",
        "glow-lg": "0 0 50px -10px rgba(0, 191, 255, 0.5)",
        "card-glow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 30%, rgba(11, 108, 255, 0.18) 0%, rgba(0, 191, 255, 0.05) 50%, transparent 80%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};
