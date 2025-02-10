const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-properties': false,
      }
    },
    ...(IS_PRODUCTION ? {cssnano: {}} : {})
  }
}
