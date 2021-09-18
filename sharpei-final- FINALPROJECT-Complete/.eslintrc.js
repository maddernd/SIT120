module.exports = {
  root: true,
  env: {
      node: true
  },
  'extends': [
      'plugin:vue/essential'
      
  ],
  rules: {
      'no-console': 'off',
      'no-debugger':'off',
      indent: 0,
      'no-tabs': 0,
      'eol-last': 0,
      'func-call-spacing': 0
  },
  parserOptions: {
      parser: 'babel-eslint'
  }
};