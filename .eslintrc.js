module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['prebuild/*'],
      extends: ['eslint:recommended'],
      rules: {},
    },
  ],
  globals: {
    cookieStore: true,
  },
};
