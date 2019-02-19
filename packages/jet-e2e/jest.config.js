'use strict';

module.exports = {
  preset: 'jest-puppeteer',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.e2e.ts',
    '<rootDir>/**/?(*.)e2e.(spec|test).ts',
  ],
  transform: {
    '^.+\\.ts$': require.resolve('ts-jest'),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.ts$',
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ]
};
