module.exports = {
  root: true,
  extends: ['plugin:cypress/recommended'],
  plugins: ['eslint-plugin-cypress'],
  env: {
    'cypress/globals': true,
  },
};
