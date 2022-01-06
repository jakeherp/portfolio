const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-tailwind-dark-mode',
	],
	staticDirs: ['../public'],
	webpackFinal: (config) => {
		// Allows path aliases
		config.resolve.plugins = [
			new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
		];

		// Allows for the use of env variables using next/config
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'next/config': path.join(__dirname, './mocks/next-config.js'),
		};

		// Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test('.svg')
		);
		fileLoaderRule.exclude = /\.svg$/;

		config.module.rules.unshift({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config.module.rules.push({
			test: /\,css&/,
			use: [
				{
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: [require('tailwindcss'), require('autoprefixer')],
					},
				},
			],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	},
};
