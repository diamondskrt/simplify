module.exports = {
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.js',
  tailwindAttributes: ['className'],
  tailwindFunctions: ['clsx', 'tva', 'cn'],
  trailingComma: 'es5',
};
