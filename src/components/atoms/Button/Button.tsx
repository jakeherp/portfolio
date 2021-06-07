import { FC } from 'react';
import { StyledButton, StyledLink } from './styles';

export interface ButtonProps {
	href?: string;
	onClick?: (...args: any) => void;
	target?: '_blank' | '_self' | '_parent';
}

const Button: FC<ButtonProps> = ({ children, href, target, onClick }) => {
	if (href)
		return (
			<StyledLink href={href} target={target}>
				{children}
			</StyledLink>
		);

	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
