'use client';

import { NavigationItem } from '@components/atoms/NavigationItem';
import { ThemeToggle } from '@components/atoms/ThemeToggle';
import { navItems } from '@components/organisms/Header';

import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';

export interface MobileMenuProps {
	isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
	const navigationVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: (custom: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.div
					className="fixed top-0 z-40 h-screen w-screen gap-12 bg-gradient-to-b from-grey-200 to-transparent p-4 backdrop-blur-xl transition-all delay-100 duration-700 ease-in-out dark:from-grey-900 md:hidden"
					initial={{ opacity: 0, y: '-50%', x: 0 }}
					animate={{ opacity: 1, y: 0, x: 0 }}
					exit={{ opacity: 0, y: '-50%' }}
					transition={{ duration: 0, delay: 0 }}
				>
					<FocusTrap
						focusTrapOptions={{
							clickOutsideDeactivates: true,
						}}
					>
						<ul className="align-center flex h-full flex-col justify-center gap-4 text-center">
							{navItems.map(({ href, title }, i) => (
								<NavigationItem
									key={href}
									href={href}
									title={title}
									variants={navigationVariants}
									initial="hidden"
									animate="visible"
									customDelay={0.5 + (i + 1) * 0.1}
								/>
							))}
							<motion.li
								className="mt-12 flex justify-center"
								variants={navigationVariants}
								initial="hidden"
								animate="visible"
								custom={0.5 + (navItems.length + 1) * 0.1}
							>
								<ThemeToggle />
							</motion.li>
						</ul>
					</FocusTrap>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};
