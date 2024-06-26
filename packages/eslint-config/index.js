module.exports = {
  extends: ['@rocketseat/eslint-config/next', 'plugin:tailwindcss/recommended'],
  plugins: ['simple-import-sort'],
  root: true,
  rules: {
    'no-case-declarations': 'off',
    '@typescript-eslint/no-namespace': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'simple-import-sort/imports': 'error',
    'tailwindcss/classnames-order': [
      1,
      {
        callees: ['classNames', 'clsx', 'cn', 'cva'],
      },
    ],
  },
}
