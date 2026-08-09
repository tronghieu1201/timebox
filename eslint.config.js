export default [
  {
    files: ['src/space-navigation/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        cancelAnimationFrame: 'readonly',
        console: 'readonly',
        document: 'readonly',
        MutationObserver: 'readonly',
        navigator: 'readonly',
        performance: 'readonly',
        requestAnimationFrame: 'readonly',
        ResizeObserver: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      'no-constant-binary-expression': 'error',
      'no-redeclare': 'error',
      'no-undef': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        Buffer: 'readonly',
        console: 'readonly',
        process: 'readonly'
      }
    },
    rules: {
      'no-redeclare': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error'
    }
  }
];
