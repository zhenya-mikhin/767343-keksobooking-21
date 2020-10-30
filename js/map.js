'use strict';

(function () {
  const mapPins = window.data.map.querySelector('.map__pins');
  const mapPinMain = window.data.map.querySelector('.map__pin--main');
  const renderPins = function (dataPins) {
    const mapPinsFragment = document.createDocumentFragment();
    for (let i = 0; i < dataPins.length; i++) {
      mapPinsFragment.appendChild(window.pin.createPin(dataPins[i]));
    }
    window.map.mapPins.appendChild(mapPinsFragment);
  };

  const getMapPinMainCoords = function () {
    const mapPinMainPosition = {
      x: mapPinMain.offsetLeft + Math.floor(mapPinMain.offsetWidth / 2),
      y: mapPinMain.offsetTop + mapPinMain.offsetHeight + window.data.ARROW_HEIGHT
    };
    return mapPinMainPosition;
  };

  window.map = {
    mapPins: mapPins,
    mapPinMain: mapPinMain,
    renderPins: renderPins,
    getMapPinMainCoords: getMapPinMainCoords
  };

})();
