import { FC } from 'react';
import { List, StyledNavigation } from './styles';
import Link from 'next/link';
import { ThemeToggle } from 'Atoms/ThemeToggle';

interface NavigationProps {
	onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
	return (
		<StyledNavigation>
			<List>
				<li>
					<Link href="/">
						<a onClick={onClick}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a onClick={onClick}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/uses">
						<a onClick={onClick}>Uses</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a onClick={onClick}>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/portfolio">
						<a onClick={onClick}>Portfolio</a>
					</Link>
				</li>
				<li className="desktop-only">
					<ThemeToggle />
				</li>
			</List>
		</StyledNavigation>
	);
};

export { Navigation };
