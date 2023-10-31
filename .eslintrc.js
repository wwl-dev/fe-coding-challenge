module.exports = {
  root: true,
  extends: [
    require.resolve('./eslint/rules/base'),
    require.resolve('./eslint/rules/react'),
    require.resolve('./eslint/rules/import'),
    require.resolve('./eslint/rules/typescript'),
    require.resolve('./eslint/rules/prettier')
  ]
};
