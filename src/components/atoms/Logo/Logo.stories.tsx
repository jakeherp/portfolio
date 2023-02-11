/* eslint-disable import/no-anonymous-default-export */
import { Logo } from './Logo';

export default {
	title: 'atoms/Logo',
	component: Logo,
};

export const LogoStory = () => <Logo />;

LogoStory.storyName = 'Logo';
