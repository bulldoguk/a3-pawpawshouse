module.exports = {
  content: {
    files: ["./modules/**/*.{html,scss,js}"],
  },
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
    {
      pattern: /bg-(gray|green|blue)-(100|200|300|400|500)/,
    },
  ],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
