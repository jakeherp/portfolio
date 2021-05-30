import { Icon } from 'Atoms/Icon';
import { FC } from 'react';
import { StyledSocialIcons } from './styles';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a href="https://github.com/jakeherp" target="_blank" title="Github">
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/jakeherp" target="_blank" title="Twitter">
					<Icon icon="TWITTER" />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/jacobherper"
					target="_blank"
					title="LinkedIn"
				>
					<Icon icon="LINKEDIN" />
				</a>
			</li>
			<li>
				<a
					href="https://instagram.com/jakeherp"
					target="_blank"
					title="Instagram"
				>
					<Icon icon="INSTAGRAM" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
