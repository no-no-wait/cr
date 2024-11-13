const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve('assert/'),
    url: require.resolve('url/'),
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    fs: false, 
    stream: require.resolve('stream-browserify')
  };
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  ];
  
  return config;
};
