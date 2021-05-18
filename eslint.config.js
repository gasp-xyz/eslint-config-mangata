module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
}
