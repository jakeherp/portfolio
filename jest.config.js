const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleDirectories: ['node_modules', __dirname],
	moduleNameMapper: {
		'\\.svg': '<rootDir>/__mocks__/svg.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'^@(.*)$': '<rootDir>/src/$1',
	},
	watchPlugins: [],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
