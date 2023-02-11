import { createClient } from 'next-sanity';

const sanityConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'v1',
	useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(sanityConfig);
