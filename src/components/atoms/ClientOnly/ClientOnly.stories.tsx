import { ClientOnly } from './ClientOnly';

export default {
	title: 'atoms/ClientOnly',
	component: ClientOnly,
};

export const ClientOnlyStory = ({ children }: any) => (
	<ClientOnly>{children}</ClientOnly>
);

ClientOnlyStory.storyName = 'ClientOnly';
ClientOnlyStory.args = {
	children: 'Content only gets rendered on the client',
};
