module.exports = {
  poweredByHeader: false,
  assetPrefix: process.env.ASSET_HOST || "",
  productionBrowserSourceMaps: process.env.NODE_ENV === "production",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  publicRuntimeConfig: {},
  images: {
    domains: [],
  },
};
