import { Container } from '@components/atoms/Container';
import {
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconThreads,
	IconX,
} from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20">
			<Container className="flex justify-between">
				<span>&copy; {new Date().getFullYear()} Jacob Herper</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://www.github.com/jakeherp',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/jacobherper',
							icon: <IconLinkedin />,
						},
						{
							name: 'Threads',
							url: 'https://www.threads.net/@jakeherp',
							icon: <IconThreads />,
						},
						{
							name: 'X.com',
							url: 'https://twitter.com/jakeherp',
							icon: <IconX />,
						},
						{
							name: 'Instagram',
							url: 'https://www.instagram.com/jakeherp',
							icon: <IconInstagram />,
						},
					]}
				/>
			</Container>
		</footer>
	);
};

export { Footer };
