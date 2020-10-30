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
  const onMousMove = function (moveEvt) {
    moveEvt.preventDefault();
    const startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    const shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    const mapPinMainPosition = {
      x: window.map.mapPinMain.offsetLeft - shift.x,
      y: window.map.mapPinMain.offsetTop - shift.y
    };
    const border = {
      TOP: window.data.LIMITS.Y.MIN - window.map.mapPinMain.offsetHeight,
      BOTTOM: window.data.LIMITS.Y.MAX - window.map.mapPinMain.offsetHeight,
      LEFT: window.data.LIMITS.X.MIN,
      RIGHT: window.data.LIMITS.X.MAX - window.map.mapPinMain.offsetWidth
    };
    if (mapPinMainPosition.x >= border.LEFT && mapPinMainPosition.x <= border.RIGHT) {
      window.map.mapPinMain.style.left = mapPinMainPosition.x + 'px';
    }
    if (mapPinMainPosition.y >= border.TOP && mapPinMainPosition.y <= border.BOTTOM) {
      window.map.mapPinMain.style.top = mapPinMainPosition.y + 'px';
    }
  };

  window.pin = {
    createPin: createPin,
    onMousMove: onMousMove
  };
})();
