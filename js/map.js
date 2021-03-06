'use strict';

const PIN_POSITION = {
  TOP: 375,
  LEFT: 570
};

const map = document.querySelector(`.map`);
const mapPins = map.querySelector(`.map__pins`);
const mapPinMain = mapPins.querySelector(`.map__pin--main`);

const renderPins = function (dataPins) {
  const mapPinsFragment = document.createDocumentFragment();

  const mapPinsHandler = function (evt) {
    evt.preventDefault();
    window.card.removeMapCard();
    if ((evt.key === `Enter` || evt.button === 0) && evt.target.dataset.pinId) {
      window.card.renderCard(dataPins[evt.target.dataset.pinId]);
    }
  };

  for (let i = 0; i < dataPins.length; i++) {
    mapPinsFragment.appendChild(window.pin.createPin(dataPins[i], i));
    mapPins.addEventListener(`mousedown`, mapPinsHandler);
    mapPins.addEventListener(`keydown`, mapPinsHandler);
  }
  mapPins.appendChild(mapPinsFragment);
};

const getMapPinMainCoords = function () {
  return {
    x: mapPinMain.offsetLeft + Math.floor(mapPinMain.offsetWidth / 2),
    y: mapPinMain.offsetTop + mapPinMain.offsetHeight + window.data.ARROW_HEIGHT
  };
};

const deactivateMap = function () {
  map.classList.add(`map--faded`);
  window.pin.removePin();
  window.card.removeMapCard();
  mapPinMain.style.top = PIN_POSITION.TOP + `px`;
  mapPinMain.style.left = PIN_POSITION.LEFT + `px`;
  window.filter.deactivateFilter();
};

window.map = {
  mapMain: map,
  mapPins,
  mapPinMain,
  renderPins,
  getMapPinMainCoords,
  deactivateMap
};
