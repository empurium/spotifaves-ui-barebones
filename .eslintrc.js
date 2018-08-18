const fs = require('fs');
const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'chai-friendly'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-parens': 'off',
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'consistent-return': 0,
    'implicit-arrow-linebreak': ['off'],
    'operator-linebreak': 'off',
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-console': 1,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
};
