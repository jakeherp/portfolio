import { AnimatePresence, motion } from 'framer-motion';

import { NavigationItem } from 'Atoms/NavigationItem';
import { navItems } from 'Organisms/Header';
import { ThemeToggle } from 'Atoms/ThemeToggle';

export interface MobileMenuProps {
	isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
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
					className="fixed md:hidden z-40 transition-all duration-700 delay-100 ease-in-out bg-gradient-to-b from-grey-200 dark:from-grey-900 to-transparent backdrop-blur-xl w-screen p-4 gap-12 top-0 h-screen"
					initial={{ opacity: 0, y: '-50%', x: 0 }}
					animate={{ opacity: 1, y: 0, x: 0 }}
					exit={{ opacity: 0, y: '-50%' }}
					transition={{ duration: 0, delay: 0 }}
				>
					<ul className="flex flex-col justify-center align-center text-center gap-4 h-full">
						{navItems.map(({ href, title }, i) => (
							<NavigationItem
								href={href}
								title={title}
								key={href}
								variants={navigationVariants}
								initial="hidden"
								animate="visible"
								customDelay={0.5 + (i + 1) * 0.1}
							/>
						))}
						<motion.li
							className="flex justify-center mt-12"
							variants={navigationVariants}
							initial="hidden"
							animate="visible"
							custom={0.5 + (navItems.length + 1) * 0.1}
						>
							<ThemeToggle />
						</motion.li>
					</ul>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export { MobileMenu };
