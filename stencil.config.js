exports.config = {
  bundles: [
    { components: ['wr-slot3d', 'wr-slot3d-item'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
