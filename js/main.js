'use strict';

(function () {

  const addressInput = document.querySelector('#address');
  const doRenderPinsAndCard = function () {
    window.load.onLoad(window.map.renderPins, onerror);
    // window.load(window.card, onerror);
  };
  const adAddress = function () {
    const addressInputCoords = window.map.getMapPinMainCoords();
    addressInput.value = Math.round(addressInputCoords.x) + ', ' + Math.round(addressInputCoords.y);
  };
  const doListenMapPinMain = function (evt) {
    if (evt.button === 0 || evt.key === 'Enter') {
      window.form.activationForm();
      doRenderPinsAndCard();
    }
    adAddress();
  };

  addressInput.value = Math.round((window.map.mapPinMain.offsetLeft + window.map.mapPinMain.offsetWidth / 2)) + ', ' + Math.round((window.map.mapPinMain.offsetTop + window.map.mapPinMain.offsetHeight / 2));

  window.form.deActivationForm();

  window.map.mapPinMain.addEventListener('mousedown', doListenMapPinMain);
  window.map.mapPinMain.addEventListener('keydown', doListenMapPinMain);

})();
