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
			<div className="animate-hover absolute left-12 top-0 z-30 w-1/2 md:left-20">
				<Image
					src={topFloatingImage}
					width={330}
					height={210}
					alt={altText}
					className="z-30"
				/>
			</div>
			<div className="animate-hover animation-delay absolute bottom-0 right-12 z-30 w-1/2 md:right-20">
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
