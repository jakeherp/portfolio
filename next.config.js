/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	poweredByHeader: false,
	swcMinify: true,
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		domains: ['dev-to-uploads.s3.amazonaws.com', 'cdn.sanity.io'],
	},
	publicRuntimeConfig: {
		sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
		sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
		sanityApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '',
	},
	serverRuntimeConfig: {
		sanityApiToken: process.env.SANITY_API_TOKEN || '',
	},
};

module.exports = nextConfig;
