'use strict';

(function () {
  const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
  const createPin = function (dataPin) {
    const currentPin = mapPin.cloneNode(true);
    const currentPinImg = currentPin.querySelector('img');
    currentPinImg.src = dataPin['author']['avatar'];
    currentPinImg.alt = dataPin['offer']['title'];
    currentPin.style.left = dataPin['location']['x'] + 'px';
    currentPin.style.top = dataPin['location']['y'] + 'px';
    return currentPin;
  };

  window.createPin = createPin;
})();
