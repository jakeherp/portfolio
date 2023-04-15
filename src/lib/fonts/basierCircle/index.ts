import localFont from 'next/font/local';

export const basierCircle = localFont({
	src: [
		{
			path: './basiercircle-regular-webfont.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: './basiercircle-regularitalic-webfont.woff',
			weight: '400',
			style: 'italic',
		},
		{
			path: './basiercircle-bold-webfont.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: './basiercircle-bolditalic-webfont.woff',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-basier-circle',
});
