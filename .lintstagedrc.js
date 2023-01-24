const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildStyleLintCommand = (filenames) =>
  `stylelint --cache ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{js,ts,tsx}': [buildEslintCommand],
  '*.{css,scss}': [buildStyleLintCommand],
};
