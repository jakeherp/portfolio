import '../src/styles/globals.css';

import { withThemeByDataAttribute } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import type { ReactNode } from 'react';
import React from 'react';

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'class',
	}),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
