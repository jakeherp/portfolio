import { ClientOnly } from './ClientOnly';

export default {
	title: 'atoms/ClientOnly',
	component: ClientOnly,
};

interface Props {
	children: React.ReactNode;
}

export const ClientOnlyStory = ({ children }: Props) => (
	<ClientOnly>{children}</ClientOnly>
);

ClientOnlyStory.storyName = 'ClientOnly';
ClientOnlyStory.args = {
	children: 'Content only gets rendered on the client',
};
