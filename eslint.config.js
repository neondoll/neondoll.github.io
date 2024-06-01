import globals from 'globals';
import jest from 'eslint-plugin-jest';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default ts.config(
  stylistic.configs.customize({ indent: 2, quotes: 'single', semi: true, jsx: true }),
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2021 },
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: ts.parser,
        project: true,
        sourceType: 'module',
      },
    },
  },
  { files: ['**/*.js'], ...ts.configs.disableTypeChecked },
  {
    files: ['/src/tests/**'], ...jest.configs['flat/recommended'], ...jest.configs['flat/style'],
    languageOptions: { globals: globals.jest },
    rules: { ...jest.configs['flat/recommended'].rules, ...jest.configs['flat/style'].rules },
  },
  {
    files: ['eslint.config.js', 'jest.config.ts', 'vite.config.ts'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { parser: ts.parser, project: 'tsconfig.node.json', sourceType: 'script' },
    },
  },
);
