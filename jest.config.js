module.exports = {
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['./src/**/*.js'],
  testRegex: '(/src/{0,1}.*/__tests__/.*)\\.jsx?$',
  coverageThreshold: {
    global: {
      statements: 8,
      branches: 4,
      functions: 10,
      lines: 8,
    },
  },
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/styleMock.js'),
  },
};
