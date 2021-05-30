import { FC } from 'react';
import { List, StyledNavigation } from './styles';
import Link from 'next/link';
import { ThemeToggle } from 'Atoms/ThemeToggle';

const Navigation: FC = () => {
	return (
		<StyledNavigation>
			<List>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Uses</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Portfolio</a>
					</Link>
				</li>
				<li>
					<ThemeToggle />
				</li>
			</List>
		</StyledNavigation>
	);
};

export { Navigation };
