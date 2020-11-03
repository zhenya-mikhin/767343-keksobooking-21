'use strict';

(function () {

  const map = document.querySelector('.map');
  const mapPins = map.querySelector('.map__pins');
  const mapPinMain = mapPins.querySelector('.map__pin--main');

  const renderPins = function (dataPins) {
    const mapPinsFragment = document.createDocumentFragment();

    const mapPinslistener = function (evt) {
      evt.preventDefault();
      if (evt.key === "Enter" || evt.button === 0) {
        if (evt.target.dataset.id) {
          window.card.renderCard(dataPins[evt.target.dataset.id]);
        }
      }
    };

    for (let i = 0; i < dataPins.length; i++) {
      mapPinsFragment.appendChild(window.pin(dataPins[i])).dataset.id = i;
      mapPins.addEventListener('mousedown', mapPinslistener);
      mapPins.addEventListener('keydown', mapPinslistener);
    }
    mapPins.appendChild(mapPinsFragment);
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
