import { FC } from 'react';
import { StyledIcon } from './styles';

import Github from 'Public/assets/github.svg';
import Linkedin from 'Public/assets/linkedin.svg';
import Instagram from 'Public/assets/instagram.svg';
import Twitter from 'Public/assets/twitter.svg';

export interface IconProps {
	icon: 'GITHUB' | 'LINKEDIN' | 'INSTAGRAM' | 'TWITTER';
}

const Icon: FC<IconProps> = ({ icon }) => {
	let Icon = () => <svg />;

	switch (icon) {
		case 'GITHUB':
			Icon = Github;
			break;
		case 'LINKEDIN':
			Icon = Linkedin;
			break;
		case 'INSTAGRAM':
			Icon = Instagram;
			break;
		case 'TWITTER':
			Icon = Twitter;
			break;
		default:
			break;
	}

	return (
		<>
			<Icon />
		</>
	);
};

export { Icon };
