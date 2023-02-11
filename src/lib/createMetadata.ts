import { Metadata } from 'next';
import {
	Author,
	ColorSchemeEnum,
	ReferrerEnum,
} from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

interface CustomMetadata extends Metadata {
	url?: string;
	images?: OpenGraph['images'];
	locale?: OpenGraph['locale'];
}

export const createMetadata = (metadata: CustomMetadata) => {
	return {
		title: metadata.title,
		description: metadata.description,
		applicationName: metadata.applicationName || 'Jacob Herper - Portfolio',
		referrer: 'origin-when-cross-origin' as ReferrerEnum,
		keywords: metadata.keywords,
		authors: metadata.authors || [{ name: 'Jacob Herper' }],
		themeColor: '#14142B',
		colorScheme: 'dark' as ColorSchemeEnum,
		creator: metadata.creator || 'Jacob Herper',
		publisher: metadata.publisher || 'Jacob Herper',
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			url: metadata.url,
			siteName: metadata.applicationName || 'Jacob Herper - Portfolio',
			images: metadata.images,
			locale: metadata.locale || 'en-GB',
			type: 'website',
		},
	};
};
