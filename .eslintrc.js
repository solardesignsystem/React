module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020, 
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: ['prettier/react', 'prettier/flowtype', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
};
