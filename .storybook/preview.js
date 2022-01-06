import * as nextImage from 'next/image';
import '../src/styles/index.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [];

// Replace next/image for Storybook
Object.defineProperty(nextImage, 'default', {
	configurable: true,
	value: (props) => {
		const { width, height } = props;

		let styles;
		const ratio = (height / width) * 100;
		if (isNaN(ratio)) {
			styles = {
				boxSizing: 'border-box',
				display: 'block',
				margin: 0,
				overflow: 'hidden',
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				top: 0,
			};
		} else {
			styles = {
				paddingBottom: `${ratio}%`,
			};
		}

		return (
			<div
				style={{
					position: 'relative',
					...styles,
				}}
			>
				<img
					style={{
						objectFit: 'cover',
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
					{...props}
				/>
			</div>
		);
	},
});
