'use strict';

(function () {
  const DEBOUNCE_INTERVAL = 300; // ms

  window.debounce = function (cb) {
    let lastTimeout = null;

    return function(...parameters) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function() {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
