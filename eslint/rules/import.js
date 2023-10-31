module.exports = {
  overrides: [
    {
      files: '**/*.[jt]s?(x)',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      extends: ['plugin:import/recommended', 'plugin:import/typescript'],
      rules: {
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'error',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [{ pattern: 'react*', group: 'external', position: 'before' }],
            warnOnUnassignedImports: false,
            pathGroupsExcludedImportTypes: ['builtin', 'react', '@mui'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc'
            }
          }
        ]
      }
    }
  ]
};
