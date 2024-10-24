const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/my-time-app' : '',
  assetPrefix: isProd ? '/my-time-app/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
