module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
