module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
        'react/jsx-boolean-value': [1, 'never'],
        'react/self-closing-comp': [1, { component: true, html: true }]
      }
    }
  ]
};
