module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',    
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 'off',
    'comma-dangle': ['error', 'never'],
    eqeqeq: 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'import/extensions': ['error'],
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    'no-unused-expressions': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    radix: 'off',
    semi: ['error', 'never'],
    'vue/attribute-hyphenation': 'off',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: false
    }],
    'vue/max-attributes-per-line': ['error', { singleline: { max: 1 },
      multiline: { max: 1 } }],
    'vue/max-len': 'off',
    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2
    }],
    "vue/no-duplicate-attributes": ["error", {
      "allowCoexistClass": true,
      "allowCoexistStyle": true
    }],
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        'emits',
        ['props', 'propsData'],
        'setup',
        'asyncData',
        'data',
        'fetch',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
        'head'
      ]
    }],
    'vue/prop-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/script-setup-uses-vars': 'off'
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue']
      }
    }
  }
}
