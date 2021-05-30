import { GlobalStyles } from 'Styles/globalStyles';

const StyleDecorator = (Story) => {
	return (
		<>
			<GlobalStyles />
			<Story />
		</>
	);
};

export default StyleDecorator;
