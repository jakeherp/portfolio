module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/loadershim.js'],
  collectCoverageFrom: ['**/src/**/*.+(js|jsx|ts|tsx)'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 40,
      functions: 50,
      lines: 70,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    {
      displayName: 'test',
      preset: 'ts-jest',
      transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
      },
      moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
      moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/file-mock.ts',
        '^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
        '^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
        '^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
        '^Templates(.*)$': '<rootDir>/src/components/templates$1',
        '^Assets(.*)$': '<rootDir>/src/assets$1',
        '^Context(.*)$': '<rootDir>/src/context$1',
        '^Data(.*)$': '<rootDir>/src/data$1',
        '^Helpers(.*)$': '<rootDir>/src/helpers$1',
        '^Hooks(.*)$': '<rootDir>/src/hooks$1',
      },
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'cypress'],
      transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
      globals: {
        __PATH_PREFIX__: '',
      },
      testURL: 'http://localhost',
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/**/*.+(js|tsx)'],
      testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'cypress'],
    },
  ],
};
