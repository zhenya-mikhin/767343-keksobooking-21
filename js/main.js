'use strict';

(function () {

  const addressInput = document.querySelector('#address');
  const doListenMapPinMain = function (evt) {
    if (evt.button === 0 || evt.key === 'Enter') {
      window.form.activationForm();
      adAddress();
    }
    window.load(window.map.renderPins, onerror);
  };

  addressInput.value = Math.round((window.map.mapPinMain.offsetLeft + window.map.mapPinMain.offsetWidth / 2)) + ', ' + Math.round((window.map.mapPinMain.offsetTop + window.map.mapPinMain.offsetHeight / 2));
  const adAddress = function () {
    addressInput.value = Math.round((window.map.mapPinMain.offsetLeft + window.map.mapPinMain.offsetWidth / 2)) + ', ' + Math.round((window.map.mapPinMain.offsetTop + window.map.mapPinMain.offsetHeight + window.data.ARROW_HEIGHT));
  };

  window.form.deActivationForm();

  window.map.mapPinMain.addEventListener('mousedown', doListenMapPinMain);
  window.map.mapPinMain.addEventListener('keydown', doListenMapPinMain);

})();
