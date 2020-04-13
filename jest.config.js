module.exports = {
  ...require('./jest/jest.client'),
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
    '^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
    '^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
    '^Templates(.*)$': '<rootDir>/src/components/templates$1',
    '^Context(.*)$': '<rootDir>/src/context$1',
    '^Data(.*)$': '<rootDir>/src/data$1',
    '^Helpers(.*)$': '<rootDir>/src/helpers$1',
    '^Hooks(.*)$': '<rootDir>/src/hooks$1',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js'],
  collectCoverageFrom: ['**/src/**/*.+(js|jsx|ts|tsx)'],
  coverageThreshold: {
    global: {
      statements: 25,
      branches: 25,
      functions: 30,
      lines: 30,
    },
  },
  projects: ['./jest/jest.client.js', './jest/jest.lint.js'],
};
