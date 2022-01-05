import { Box } from './Box';

export default {
	title: 'atoms/Box',
	component: Box,
};

export const BoxStory = ({ children }: any) => <Box>{children}</Box>;

BoxStory.storyName = 'Box';
BoxStory.args = {
	children: 'Hello Box',
};
