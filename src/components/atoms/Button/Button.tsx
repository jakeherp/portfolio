import classNames from 'classnames';
import { FC, ReactNode } from 'react';

type Button = {
	onClick: (...args: unknown[]) => void;
	type?: 'submit' | 'button';
	disabled?: boolean;
	className?: string;
	children: ReactNode;
};

type Link = {
	href: string;
	target?: '_blank' | '_self';
	className?: string;
	download?: boolean;
	children: ReactNode;
};

export type ButtonProps = Button | Link;

const isLink = (button: Button | Link): button is Link => {
	return (button as Link).href !== undefined;
};

const Button: FC<ButtonProps> = (props) => {
	const { className, children } = props;
	const href = isLink(props) ? props.href : undefined;
	const target = isLink(props) ? props.target : undefined;
	const download = isLink(props) ? props.download : false;
	const onClick = !isLink(props) ? props.onClick : undefined;
	const type = !isLink(props) ? props.type : undefined;
	const disabled = !isLink(props) ? props.disabled || false : undefined;

	const classes =
		'block gradient-border transition transition-300 rounded-md px-4 py-2 headline hover:gradient-bg hover:text-off-white';

	if (isLink(props)) {
		return (
			<a
				href={href}
				target={target}
				className={classNames(classes, className)}
				download={download}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			className={classNames(classes, className)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export { Button };
