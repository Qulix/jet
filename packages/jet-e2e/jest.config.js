'use strict';

module.exports = {
  // TODO: should replaced with preset when it will be fixed
  globalSetup: require.resolve("jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("expect-puppeteer")],
  // ---
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
