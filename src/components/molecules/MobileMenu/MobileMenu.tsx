import classNames from 'classnames';

import { NavigationItem } from 'Atoms/NavigationItem';
import { ThemeToggle } from 'Atoms/ThemeToggle';

export interface MobileMenuProps {
	isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
	return (
		<div
			className={classNames(
				'fixed md:hidden z-40 transition-all duration-700 delay-100 ease-in-out bg-gradient-to-b from-grey-200 dark:from-grey-900 to-transparent backdrop-blur-xl w-screen p-4 gap-12',
				{
					'top-0 h-screen': isOpen,
					'-top-96 h-0 overflow-hidden': !isOpen,
				}
			)}
		>
			<ul className="flex flex-col justify-center align-center text-center gap-4 h-full">
				<NavigationItem href="/about" title="About" />
				<NavigationItem href="/uses" title="Uses" />
				<NavigationItem href="/case-studies" title="Case Studies" />
				<NavigationItem href="/blog" title="Blog" />
				<li className="flex justify-center mt-12">
					<ThemeToggle />
				</li>
			</ul>
		</div>
	);
};

export { MobileMenu };
