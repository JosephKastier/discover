import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc', '**/*.config.*'],
  },
  {
    files: [
      'apps/**/*.ts',
      'apps/**/*.tsx',
      'apps/**/*.js',
      'apps/**/*.jsx',
      'libs/**/*.ts',
      'libs/**/*.tsx',
      'libs/**/*.js',
      'libs/**/*.jsx',
    ],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      'apps/**/*.ts',
      'apps/**/*.tsx',
      'apps/**/*.cts',
      'apps/**/*.mts',
      'apps/**/*.js',
      'apps/**/*.jsx',
      'apps/**/*.cjs',
      'apps/**/*.mjs',
      'libs/**/*.ts',
      'libs/**/*.tsx',
      'libs/**/*.cts',
      'libs/**/*.mts',
      'libs/**/*.js',
      'libs/**/*.jsx',
      'libs/**/*.cjs',
      'libs/**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['apps/**/*.html', 'libs/**/*.html'],
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/use-track-by-function': 'error',
    },
  },
];
