module.exports = {
  extends: ['wesbos'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    indent: 0,
    'react/destructuring-assignment': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      },
    ],
  },
};
