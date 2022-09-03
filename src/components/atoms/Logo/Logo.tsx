import Image from 'next/image';
import Jacob from './jacob-herper.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
	return (
		<Link href="/" passHref>
			<motion.a
				className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<Image
					src={Jacob}
					width={48}
					height={48}
					quality={100}
					alt="Vectorised image of Jacob Herper"
					className="w-12 h-12"
				/>
				<span className="transition duration-300 opacity-100 group-hover:opacity-0">
					@jakeherp
				</span>
				<span className="absolute transition duration-300 left-16 opacity-0 group-hover:opacity-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
					Jacob Herper
				</span>
			</motion.a>
		</Link>
	);
};

export { Logo };
