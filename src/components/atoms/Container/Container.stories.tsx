/* eslint-disable import/no-anonymous-default-export */
import { Container } from './Container';

export default {
	title: 'atoms/Container',
	component: Container,
};

interface Props {
	children: React.ReactNode;
}

export const ContainerStory = ({ children }: Props) => (
	<Container>{children}</Container>
);

ContainerStory.storyName = 'Container';
ContainerStory.args = {
	children: 'Content',
	className: '',
};
