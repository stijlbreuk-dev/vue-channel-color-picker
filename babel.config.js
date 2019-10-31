// babel.config.js
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        polyfills: [
          'es6.promise'
        ]
      }
    ],
    'airbnb'
  ]
};
