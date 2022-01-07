import Image from 'next/image';

export interface FloatingImagesProps {
	altText: string;
	mainImage: string;
	topFloatingImage: string;
	bottomFloatingImage: string;
}

const FloatingImages = ({
	altText,
	mainImage,
	topFloatingImage,
	bottomFloatingImage,
}: FloatingImagesProps) => {
	return (
		<div className="relative inline-block w-auto">
			<Image src={mainImage} width={475} height={275} alt={altText} />
			<div className="absolute w-1/2 top-0 left-12 md:left-20 z-30 animate-hover">
				<Image src={topFloatingImage} width={330} height={210} alt={altText} />
			</div>
			<div className="absolute w-1/2 bottom-0 right-12 md:right-20 z-30 animate-hover animation-delay">
				<Image
					src={bottomFloatingImage}
					width={330}
					height={210}
					alt={altText}
				/>
			</div>
		</div>
	);
};

export { FloatingImages };
