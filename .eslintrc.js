/* eslint-disable */
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
  rules: {
    'vue/name-property-casing': ['error', 'PascalCase'], //组件名应该始终是 PascalCase 的,帕斯卡。
    'vue/prop-name-casing': ['error', 'camelCase'], //组件中的prop生命应该使用驼峰命名
    'vue/require-v-for-key': 'error', //使用v-for指令时，必须使用key
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false,
      },
    ], //v-for和v-if 不要放在同一个元素上，因为优先级不 //组件上的多个属性应该分多行写，每个属性一行，不要写在同一行。
  },
};
