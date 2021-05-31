import { FC } from 'react';
import { Desktop, Flex, Mobile } from './styles';
import Link from 'next/link';

import { Container } from 'Atoms/Container';
import { Navigation } from 'Molecules/Navigation';
import { MobileNavigation } from 'Molecules/MobileNavigation';

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
