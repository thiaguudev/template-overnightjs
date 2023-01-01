/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageReporters: ['lcov', 'html', 'text'],
  modulePathIgnorePatterns: ['dist', 'node_modules', 'coverage'],
  forceExit: true,
  detectOpenHandles: true
};
