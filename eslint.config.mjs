import globals from 'globals';
import { configs as wdioConfig } from 'eslint-plugin-wdio';
import pluginJs from '@eslint/js';

const config = [
  { ignores: ['allure-report/',
    'allure-results/',
    'node_modules/',
    'wdio.conf.js' 
  ]
  },
  wdioConfig['flat/recommended'],
  pluginJs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
    },
   
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
      indent: ['error', 2],
    }
  }
];

export default config;
