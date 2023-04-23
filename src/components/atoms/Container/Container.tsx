import classNames from 'classnames';
import type { PropsWithChildren } from 'react';

interface ContainerProps {
	className?: string;
}

export const Container = ({
	children,
	className,
}: PropsWithChildren<ContainerProps>) => {
	return (
		<div
			className={classNames(
				'mx-auto w-full px-4 md:max-w-4xl lg:max-w-7xl',
				className
			)}
		>
			{children}
		</div>
	);
};
