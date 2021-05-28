process.env.TZ = 'GMT';

module.exports = {
	roots: ['<rootDir>'],
	testMatch: [
		'**/tests/**/*.test.ts',
		'**/tests/**/*.test.tsx',
		'**/*.test.ts',
		'**/*.test.tsx',
	],
	setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
	testPathIgnorePatterns: [
		'<rootDir>/build/',
		'/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/test/mockedTypes/',
	],
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	collectCoverageFrom: [
		'**/src/**/**/*.{js,jsx,ts,tsx}',
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/redux/**/index.ts',
		'!**/src/components/**/*.stories.+(js|ts|tsx)',
		'!**/__tests__/**',
		'!**/node_modules/**',
		'!**/.next/**',
		'!**/build/**',
	],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 75,
			functions: 80,
			lines: 80,
		},
	},
	projects: ['./test/jest.lint.js', './test/jest.unittest.js'],
};
