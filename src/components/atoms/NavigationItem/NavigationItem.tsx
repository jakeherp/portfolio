'use client';

import classNames from 'classnames';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavigationItemProps {
	href: string;
	title: string;
	variants: Variants;
	initial: string;
	animate: string;
	customDelay?: number;
}

const NavigationItem = ({
	href,
	title,
	variants,
	initial,
	animate,
	customDelay,
}: NavigationItemProps) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith(href);

	return (
		<motion.li
			variants={variants}
			initial={initial}
			animate={animate}
			custom={customDelay}
		>
			<Link
				href={href}
				className={classNames(
					isActive
						? 'font-bold text-off-black dark:text-off-white'
						: 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
					'md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg'
				)}
			>
				{title}
			</Link>
		</motion.li>
	);
};

export { NavigationItem };
