module.exports = {
  displayName: 'test',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
