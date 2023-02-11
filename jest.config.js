const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', __dirname],
	moduleNameMapper: {
		'\\.svg': '<rootDir>/__mocks__/svg.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'@components(.*)': '<rootDir>/src/components$1',
		'@hooks(.*)': '<rootDir>/src/hooks$1',
		'@lib(.*)': '<rootDir>/src/lib$1',
		'@mockdata(.*)': '<rootDir>/src/mockdata$1',
		'@root(.*)': '<rootDir>/$1',
		'@queries(.*)': '<rootDir>/src/queries$1',
		'@schemas(.*)': '<rootDir>/src/schemas$1',
		'@styles(.*)': '<rootDir>/src/styles$1',
		'@types(.*)': '<rootDir>/src/types$1',
	},
	watchPlugins: [],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
