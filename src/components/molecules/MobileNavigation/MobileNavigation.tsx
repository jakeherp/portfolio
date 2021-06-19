import classnames from 'classnames';
import { FC, useState } from 'react';
import { Menu, Overlay, StyledMobileNavigation } from './styles';

import { Icon } from 'Atoms/Icon';
import { Navigation } from 'Molecules/Navigation';
import { ThemeToggle } from 'Atoms/ThemeToggle';

const MobileNavigation: FC = () => {
	const [isOpen, setOpen] = useState(false);

	const toggle = () => setOpen((prev) => !prev);

	return (
		<>
			<StyledMobileNavigation>
				<li>
					<ThemeToggle />
				</li>
				<li>
					<Menu onClick={toggle}>
						<Icon icon={isOpen ? 'CLOSE' : 'MENU'} />
					</Menu>
				</li>
			</StyledMobileNavigation>
			<Overlay
				className={classnames({
					open: isOpen,
				})}
			>
				<Navigation onClick={() => setOpen(false)} />
			</Overlay>
		</>
	);
};

export { MobileNavigation };
