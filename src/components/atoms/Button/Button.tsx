import classNames from 'classnames';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type Button = {
	onClick?: (...args: unknown[]) => void;
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

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
	const { className, children } = props;
	const href = isLink(props) ? props.href : undefined;
	const target = isLink(props) ? props.target : undefined;
	const download = isLink(props) ? props.download : false;
	const onClick = !isLink(props) ? props.onClick : undefined;
	const type = !isLink(props) ? props.type : undefined;
	const disabled = !isLink(props) ? props.disabled || false : undefined;

	const classes =
		'rounded-md bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all';

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
