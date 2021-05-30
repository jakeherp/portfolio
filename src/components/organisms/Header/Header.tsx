import { FC } from 'react';
import { Flex } from './styles';
import Link from 'next/link';

import { Container } from 'Atoms/Container';
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
					<Navigation />
				</Flex>
			</Container>
		</header>
	);
};

export { Header };
