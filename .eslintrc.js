module.exports = {
  'extends': [
    'plugin:vue/vue3-recommended'
  ],
  'rules': {
    'indent': ['error',2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'semi': ['error','never'],
    // we want to avoid extraneous spaces
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': 'error'
  }
}
