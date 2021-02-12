const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/services/**/*.ts'
  ],
  coverageDirectory: './coverage',
  coverageReporters: [
    'text-summary',
    "lcov",
  ],
  
  testEnvironment: 'node',
  moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>'} ) ,
};
