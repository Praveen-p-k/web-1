/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, ts, tsx}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        default: "#211e1e",
        primary: "rgb(9, 242, 149)",
        "wallet-primary": "#ffc64d",
        "wallet-secondary": "#ffffffd9",
        secondary: "rgb(44, 43, 43)",
        green: "rgba(76, 185, 68, 1)",
        red: "rgba(227, 101, 91, 1)",
        "red-85": "#E3655B",
        black: "rgba(0, 0, 0, 1)",
        "black-10": "#0E0D0D",
        "black-15": "#100f0f",
        white: "rgba(255, 255, 255, 1)",
        "white-85": "rgba(255, 255, 255, 0.85)",
        "white-75": "rgba(255, 255, 255, 0.75)",
        "white-65": "rgba(255, 255, 255, 0.65)",
        "white-55": "rgba(255, 255, 255, 0.55)",
        "white-45": "rgba(255, 255, 255, 0.45)",
        "white-35": "rgba(255, 255, 255, 0.35)",
        "white-25": "rgba(255, 255, 255, 0.25)",
        "white-15": "rgba(255, 255, 255, 0.15)",
        "white-10": "rgba(255, 255, 255, 0.10)",
        "white-5": "rgba(255, 255, 255, 0.05)",
      },
      backgroundColor: {
        coin: "linear-gradient(45deg, black, transparent)",
      },
    },
  },
  plugins: [],
};

//#171616
