module.exports = {
  content: ["./modules/**/*.{html,scss,js}", "./views/**/*.{html,scss,js}"],
  safelist: [
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(4em) rotate(-12deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotate(0deg)",
          },
        },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 1.0s ease-out",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
