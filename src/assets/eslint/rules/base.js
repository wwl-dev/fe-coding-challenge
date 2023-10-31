module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['eslint:recommended'],
      env: {
        browser: true,
        es2021: true,
        node: true
      },
      rules: {
        'no-restricted-imports': 'off'
      }
    }
  ]
};
