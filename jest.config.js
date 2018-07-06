module.exports = {
  setupFiles: [
    '<rootDir>/test/throwOnPropTypeError.js',
  ],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['./src/**/*.js'],
  testRegex: '(/src/{0,1}.*/__tests__/.*)\\.jsx?$',
  coverageThreshold: {
    global: {
      statements: 38,
      branches: 73,
      functions: 54,
      lines: 37,
    },
  },
};
