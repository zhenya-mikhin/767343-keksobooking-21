'use strict';

const addressInput = document.querySelector(`#address`);
const adAddress = function () {
  addressInput.value = Math.round((window.map.mapPinMain.offsetLeft + window.map.mapPinMain.offsetWidth / 2)) + `, ` + Math.round((window.map.mapPinMain.offsetTop + window.map.mapPinMain.offsetHeight + window.data.ARROW_HEIGHT));
};

window.data = {
  ARROW_HEIGHT: 18,
  LIMITS: {
    X: {
      MIN: 0,
      MAX: 1200
    },
    Y: {
      MIN: 130,
      MAX: 630
    }
  },
  adAddress
};

