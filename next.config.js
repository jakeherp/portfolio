module.exports = {
	poweredByHeader: false,
	swcMinify: true,
	assetPrefix: process.env.ASSET_HOST || '',
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	publicRuntimeConfig: {},
	images: {
		domains: ['dev-to-uploads.s3.amazonaws.com', 'media.graphcms.com'],
	},
};
