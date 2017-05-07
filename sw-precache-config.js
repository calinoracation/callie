module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/*.png',
    'build/*.svg',
    'build/*.jpg',
    'build/*.woff',
    'build/komikaaxis_regular_macroman/*.woff',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};