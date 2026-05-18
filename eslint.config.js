const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPerfectionist = require('eslint-plugin-perfectionist');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const js = require('@eslint/js');

module.exports = defineConfig([
  expoConfig,
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'side-effect'],
          ignoreCase: true,
          newlinesBetween: 1,
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
        },
      ],
      'react/display-name': 'off',
      'import/no-named-as-default': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-alert': 'error',
    },
  },
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*', '**/*.js', '**/__generated__'],
  },
]);
