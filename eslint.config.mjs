import globals from 'globals';
import parserVue from 'vue-eslint-parser';
import pluginJest from 'eslint-plugin-jest';
import pluginJs from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginTs from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default pluginTs.config(
  pluginStylistic.configs.customize({ indent: 2, quotes: 'single', semi: true, jsx: true }),
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...pluginTs.configs.stylistic,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2021 },
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: pluginTs.parser,
        projectService: true,
        sourceType: 'module',
        tsconfigRootDir: import.meta.name,
      },
    },
  },
  {
    files: ['/src/tests/**'],
    ...pluginJest.configs['flat/recommended'],
    ...pluginJest.configs['flat/style'],
    languageOptions: { globals: globals.jest },
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      ...pluginJest.configs['flat/style'].rules,
    },
  },
  {
    files: ['eslint.config.mjs', 'jest.config.ts', 'vite.config.ts'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        parser: pluginTs.parser,
        project: 'tsconfig.node.json',
        sourceType: 'script',
        tsconfigRootDir: import.meta.name,
      },
    },
  },
);
