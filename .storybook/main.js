const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: (config) => {
		// Allows path aliases
		config.resolve.plugins = [
			new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
		];

		// Allows imports of SVG files
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test('.svg')
		);
		// exclude svg from Storybook's default loader rules, so we can handle it differently below
		fileLoaderRule.exclude = /\.svg$/;

		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre', // makes sure this loader resolves before others
			loader: require.resolve('@svgr/webpack'),
		});

		return config;
	},
};
