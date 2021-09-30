/**
 * Top or root level ESLint configurations
 * Don't be tempted to move this to JSON format as `.eslintrc.json` or an RC file as `.eslintrc`
 * This file being in JS, would benefit from Prettier formatting or JS Docs typedefs
 * And we can add detailed comments to explain our rationale behind each decisions
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // we can also provide a separate TSConfig, just for ESLint
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json', '.cjs'], // cover .json and .cjs files as well
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended', // disables rules that TypeScript covers
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // should be last to override codestyle rules
    /**
     * Sonarqube code complexity rules as lint checks
     */
    'plugin:sonarjs/recommended',
  ],
  root: true,
  env: {
    node: true,
    /**
     * ES6 and future EcmaScript versions are enabled by default
     */
    es6: true,
    /* It makes sense to add browser related stuff in web projects */
    jest: true,
  },
  ignorePatterns: ['coverage/**/*'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  },
};
