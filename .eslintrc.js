module.exports = {
  root: true,
  env: {
    es6: true,
    browser: false,
    node: true,
  },
  parser: ['babel-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    "airbnb-base",
    "plugin:flowtype/recommended"
  ],
  plugins: [
    'flowtype',
    'flowtype-errors'
  ],
  // check if imports actually resolve
  'settings': {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  // add your custom rules here
  'rules': {
    "flowtype-errors/show-errors": 1,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
    }],
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 1,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'space-before-function-paren': 0,
    'no-param-reassign': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'no-bitwise': 0,
  },
  globals: {},
}
