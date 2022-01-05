import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NavigationItemProps {
	href: string;
	title: string;
}

const NavigationItem = ({ href, title }: NavigationItemProps) => {
	const { asPath } = useRouter();
	const isActive = asPath.startsWith(href);

	return (
		<li>
			<Link href={href}>
				<a
					className={classNames(
						isActive
							? 'font-bold text-off-black dark:text-off-white'
							: 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
						'md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg'
					)}
				>
					{title}
				</a>
			</Link>
		</li>
	);
};

export { NavigationItem };
