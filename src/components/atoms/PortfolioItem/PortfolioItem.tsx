import { FC } from 'react';
import Image from 'next/image';
import { IPortfolioItem } from '@Types';
import Link from 'next/link';
import { shimmer } from 'Utils/shimmer';
import { StyledPortfolioItem } from './styles';

export interface PortfolioItemProps {
	item: IPortfolioItem;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ item }) => {
	const { slug, title, type, technologies } = item;

	return (
		<StyledPortfolioItem>
			<Link href={`/portfolio/${slug}`}>
				<a>
					<Image
						src={`/portfolio/${slug}.jpg`}
						width={1920}
						height={1080}
						objectFit="cover"
						alt={title}
						placeholder="blur"
						blurDataURL={shimmer(1920, 1080)}
					/>
				</a>
			</Link>
			<div className="details">
				<Link href={`/portfolio/${slug}`}>
					<a>
						<h1>{title}</h1>
						<p className="type">{type}</p>
						<p>
							<strong>Technologies used:</strong>{' '}
							<em>{technologies.join(', ')}</em>
						</p>
					</a>
				</Link>
			</div>
		</StyledPortfolioItem>
	);
};

export { PortfolioItem };
