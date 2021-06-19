import { FC } from 'react';
import Link from 'next/link';
import { Desktop, Flex, Mobile } from './styles';

import { Container } from 'Atoms/Container';
import { MobileNavigation } from 'Molecules/MobileNavigation';
import { Navigation } from 'Molecules/Navigation';

const Header: FC = () => {
	return (
		<header>
			<Container>
				<Flex>
					<h1>
						<Link href="/">
							<a>Jacob Herper</a>
						</Link>
					</h1>
					<Desktop>
						<Navigation />
					</Desktop>
					<Mobile>
						<MobileNavigation />
					</Mobile>
				</Flex>
			</Container>
		</header>
	);
};

export { Header };
