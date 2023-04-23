import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: true,
			},
		},
		'@bbbtech/storybook-formik/register',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		config.resolve!.plugins = [
			...(config.resolve!.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve!.extensions,
			}),
		];
		return config;
	},
};
export default config;
