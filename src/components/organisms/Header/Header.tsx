import Headroom from 'react-headroom';
import { useEffect, useState } from 'react';

import { BurgerIcon } from 'Atoms/BurgerIcon';
import { Logo } from 'Atoms/Logo';
import { MobileMenu } from 'Molecules/MobileMenu';
import { NavigationItem } from 'Atoms/NavigationItem';
import { ThemeToggle } from 'Atoms/ThemeToggle';
import { useRouter } from 'next/router';

export const navItems = [
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/uses',
		title: 'Uses',
	},
	{
		href: '/case-studies',
		title: 'Case Studies',
	},
	{
		href: '/blog',
		title: 'Blog',
	},
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<Headroom>
			<header className="relative z-50 px-4 lg:px-20 py-8 backdrop-blur-md">
				<div className="flex justify-between items-center">
					<Logo />
					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							{navItems.map(({ href, title }, i) => (
								<NavigationItem
									href={href}
									title={title}
									key={href}
									variants={navigationVariants}
									initial="hidden"
									animate="visible"
									customDelay={(i + 1) * 0.1}
								/>
							))}
						</ul>
					</nav>
					<button
						className="absolute z-50 top-8 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<BurgerIcon isOpen={isOpen} />
					</button>
					<div className="hidden md:block">
						<ThemeToggle />
					</div>
				</div>
			</header>
			<MobileMenu isOpen={isOpen} />
		</Headroom>
	);
};

export { Header };
