import { FC, ReactNode } from 'react';

interface BoxProps {
	children: ReactNode;
}

const Box: FC<BoxProps> = ({ children }) => {
	return (
		<div className="glass-light dark:glass-dark mb-6 rounded-3xl px-8 py-6 drop-shadow-lg transition-all hover:drop-shadow-2xl md:w-10/12">
			{children}
		</div>
	);
};

export { Box };
