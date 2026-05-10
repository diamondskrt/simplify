module.exports = {
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,

  tailwindAttributes: ['className'],
  trailingComma: 'es5',
};
