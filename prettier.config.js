// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 80,
  endOfLine: 'auto',
  arrowParens: 'avoid',
}
