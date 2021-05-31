import { FC } from 'react';

import Close from 'Public/assets/close.svg';
import Github from 'Public/assets/github.svg';
import Instagram from 'Public/assets/instagram.svg';
import Linkedin from 'Public/assets/linkedin.svg';
import Menu from 'Public/assets/menu.svg';
import Twitter from 'Public/assets/twitter.svg';

export interface IconProps {
	icon: 'CLOSE' | 'GITHUB' | 'INSTAGRAM' | 'LINKEDIN' | 'MENU' | 'TWITTER';
}

const Icon: FC<IconProps> = ({ icon }) => {
	let Icon = () => <svg />;

	switch (icon) {
		case 'CLOSE':
			Icon = Close;
			break;
		case 'GITHUB':
			Icon = Github;
			break;
		case 'INSTAGRAM':
			Icon = Instagram;
			break;
		case 'LINKEDIN':
			Icon = Linkedin;
			break;
		case 'MENU':
			Icon = Menu;
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
