'use strict';

(function () {
  window.util = {
    getRandomNumber: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomArray: function (arr) {
      const copyArray = arr.slice(0, window.util.getRandomNumber(0, arr.length));
      return copyArray;
    }
  };
})();
