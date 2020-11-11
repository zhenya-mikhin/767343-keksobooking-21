'use strict';

const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');

const createPin = function (dataPin, pinId) {
  const currentPin = mapPin.cloneNode(true);
  const currentPinImg = currentPin.querySelector('img');

  currentPinImg.src = dataPin['author']['avatar'];
  currentPinImg.alt = dataPin['offer']['title'];
  currentPin.style.left = dataPin['location']['x'] + 'px';
  currentPin.style.top = dataPin['location']['y'] + 'px';
  currentPin.dataset.pinId = pinId;
  currentPinImg.dataset.pinId = pinId;

  return currentPin;
};

const removePin = function () {
  const Pin = document.querySelector('.map__pin:not(.map__pin--main)');
  if (Pin) {
    Pin.remove();
  }
};

window.pin = {
  createPin: createPin,
  removePin: removePin
};
