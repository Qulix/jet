'use strict';

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/!**/*.d.ts',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts(x)',
    '!<rootDir>**/*.d.ts',
  ],
  setupFiles: [
    require.resolve('./jest/setupTests.js'),
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('ts-jest'),
    '\\.(css|less|sass|scss)$': require.resolve('./jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': require.resolve('./jest/fileTransform.js'),
  },
  snapshotSerializers: [
    require.resolve('enzyme-to-json/serializer')
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': require.resolve('identity-obj-proxy'),
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
}
