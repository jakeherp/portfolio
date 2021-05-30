import { Container } from './Container';

export default {
	title: 'atoms/Container',
	component: Container,
};

export const ContainerStory = ({ children }: any) => (
	<Container>{children}</Container>
);

ContainerStory.storyName = 'Container';
ContainerStory.args = {
	children: <p>Page Content</p>,
};
