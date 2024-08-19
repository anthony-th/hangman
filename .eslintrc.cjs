module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'global-require': 0,
    'no-console': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'no-undef': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
