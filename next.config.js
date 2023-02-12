const { withSentryConfig } = require('@sentry/nextjs');

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
		mailchimpAudienceId: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID || '',
		mailchimpApiServer: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER || '',
	},
	serverRuntimeConfig: {
		sanityApiToken: process.env.SANITY_API_TOKEN || '',
		mailchimpApiKey: process.env.MAILCHIMP_API_KEY || '',
		sendgridApiKey: process.env.SENDGRID_API_KEY || '',
	},
};

module.exports = withSentryConfig(
	nextConfig,
	{ silent: true },
	{ hideSourceMaps: true }
);
