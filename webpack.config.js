const path = require('path');

module.exports = {
  entry: [
    './js/util.js',
    './js/debounce.js',
    './js/load.js',
    './js/data.js',
    './js/map.js',
    './js/pin.js',
    './js/card.js',
    './js/form.js',
    './js/validity.js',
    './js/main.js',
    './js/move.js',
    './js/filter.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './js'),
    iife: true
  }
};
