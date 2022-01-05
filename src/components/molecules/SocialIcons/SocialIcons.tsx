import { Icon, IconProps } from 'Atoms/Icon';

export interface SocialIconsProps {
	profiles: Array<{
		url: string;
		name: string;
		icon: IconProps['icon'];
	}>;
}

const SocialIcons = ({ profiles }: SocialIconsProps) => {
	return (
		<ul className="flex gap-6">
			{profiles.map(({ url, name, icon }) => (
				<li
					className="w-6 h-6 opacity-70 hover:opacity-100 transition"
					key={name}
				>
					<a href={url} target="_blank" rel="noopener noreferrer" title={name}>
						<Icon icon={icon} />
					</a>
				</li>
			))}
		</ul>
	);
};

export { SocialIcons };
