module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 2%, not dead',
        corejs: 3,
        useBuiltIns: 'entry',
        modules: false,
        shippedProposals: true
      }
    ],
    '@babel/preset-react'
  ]
};
