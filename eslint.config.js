export default {
  ignores: ["coverage/", "node_modules/"],
  files: ['/*.js', '/.jsx', '**/.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ['coverage/*.js'],
      rules: {
        'no-unused-disable': 'off'
      }
    }
  ],
  rules: {
    // Правила стиля кода
    'quotes': ['error', 'single'],
    'max-len': ['error', { code: 120 }],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],

    // Правила для переменных
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'camelcase': ['error', { properties: 'always' }],

    // Правила для функций
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-before-function-paren': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'no-console': 'warn',

    // Логика и структура
    'eqeqeq': ['error', 'always'],
    'no-else-return': 'error',
    'curly': ['error', 'all'],
    'no-fallthrough': 'error',
    'default-case': 'error',

    // Безопасность
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-prototype-builtins': 'error',

    // ES6+
    'prefer-arrow-callback': 'error',
    'no-duplicate-imports': 'error',
    'template-curly-spacing': ['error', 'never'],
    'rest-spread-spacing': ['error', 'never'],

    // Разное
    'no-debugger': 'warn',
    'no-undef': 'error',
    'consistent-return': 'error'
  }
};
