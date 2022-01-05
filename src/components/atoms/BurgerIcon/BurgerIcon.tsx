import classNames from 'classnames';

export interface BurgerIconProps {
	isOpen: boolean;
}

const BurgerIcon = ({ isOpen }: BurgerIconProps) => {
	return (
		<div
			className={classNames('burger-icon', {
				open: isOpen,
			})}
		>
			<span />
			<span />
			<span />
			<span />
		</div>
	);
};

export { BurgerIcon };
