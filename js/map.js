'use strict';

(function () {
  const renderPins = function (dataPins) {
    const mapPinsFragment = document.createDocumentFragment();
    for (let i = 0; i < dataPins.length; i++) {
      mapPinsFragment.appendChild(window.createPin(dataPins[i]));
    }
    window.map.mapPins.appendChild(mapPinsFragment);
  };

  window.map = {
    mapPins: window.data.map.querySelector('.map__pins'),
    mapPinMain: window.data.map.querySelector('.map__pin--main'),

    renderPins: renderPins
  };

})();
