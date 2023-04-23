/* eslint-disable import/no-anonymous-default-export */
import { Box } from './Box';

export default {
	title: 'atoms/Box',
	component: Box,
};

interface Props {
	children: React.ReactNode;
}

export const BoxStory = ({ children }: Props) => <Box>{children}</Box>;

BoxStory.storyName = 'Box';
BoxStory.args = {
	children: 'Hello Box',
	className: '',
};
