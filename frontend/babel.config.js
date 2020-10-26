module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: '> 2%, not dead',
        corejs: 3,
        useBuiltIns: 'usage',
        modules: false,
        shippedProposals: true,
      },
    ],
  ],
};
