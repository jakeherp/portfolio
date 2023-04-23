'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const AnimatePage = ({ children }: PropsWithChildren) => {
	const variants = {
		hidden: { opacity: 0, x: 0, y: 100 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};

	return (
		<motion.div
			initial="hidden"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export { AnimatePage };
