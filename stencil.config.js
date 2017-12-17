exports.config = {
  namespace: 'wr-slot3d',
  generateDistribution: true,
  generateWWW: true,
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
