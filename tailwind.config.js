module.exports = {
  content: ["./modules/**/*.{html,scss,js}", "./views/**/*.{html,scss,js}"],
  safelist: [
    'bg-black',
    'bg-white',
    {
      pattern: /bg-(white|black)/,
      pattern: /bg-(gray|green|blue)-(100|200|300|400|500)/,
    },
  ],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
