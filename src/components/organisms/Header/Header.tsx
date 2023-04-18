'use client';

import { BurgerIcon } from '@components/atoms/BurgerIcon';
import { Container } from '@components/atoms/Container';
import { Logo } from '@components/atoms/Logo';
import { NavigationItem } from '@components/atoms/NavigationItem';
import { ThemeToggle } from '@components/atoms/ThemeToggle';
import { MobileMenu } from '@components/molecules/MobileMenu';

import { useOnKeyDown } from '@hooks/useOnKeyDown';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';

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
	{
		href: '/contact',
		title: 'Contact',
	},
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

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

	useOnKeyDown('Escape', () => setIsOpen(false));

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<Headroom style={{ zIndex: 50 }}>
			<header className="relative z-50 py-8 backdrop-blur-md">
				<Container>
					<div className="flex items-center justify-between">
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
							className="absolute right-4 top-8 z-50 md:hidden"
							onClick={() => setIsOpen((prev) => !prev)}
							aria-label="Menu"
						>
							<BurgerIcon isOpen={isOpen} />
						</button>
						<div className="hidden md:block">
							<ThemeToggle />
						</div>
					</div>
				</Container>
			</header>
			<MobileMenu isOpen={isOpen} />
		</Headroom>
	);
};
