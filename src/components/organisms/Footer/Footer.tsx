import { Container } from 'Atoms/Container';
import { SocialIcons } from 'Molecules/SocialIcons';
import { FC } from 'react';
import { Flex, StyledFooter } from './styles';

const Footer: FC = () => {
	return (
		<StyledFooter>
			<Container>
				<Flex>
					<span>&copy; {new Date().getFullYear()} Jacob Herper</span>
					<SocialIcons />
				</Flex>
			</Container>
		</StyledFooter>
	);
};

export { Footer };
