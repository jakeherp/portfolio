import cn from 'classnames';
import type { ReactNode } from 'react';

export interface SocialIconsProps {
	profiles: Array<{
		url: string;
		name: string;
		icon: ReactNode;
	}>;
	className?: string;
}

const SocialIcons = ({ profiles, className }: SocialIconsProps) => {
	return (
		<ul className={cn('flex flex-wrap gap-6', className)}>
			{profiles.map(({ url, name, icon }) => (
				<li
					className="text-2xl opacity-70 transition hover:opacity-100"
					key={name}
				>
					<a href={url} target="_blank" rel="noopener noreferrer" title={name}>
						{icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export { SocialIcons };
