'use strict';

const doRenderPinsAndCard = function () {
  window.load.onLoad(window.filter.activateFiltration, onerror);
};
const doListenMapPinMain = function (evt) {
  if (evt.button === 0 || evt.key === 'Enter') {
    window.form.activationForm();
    doRenderPinsAndCard();
  }
  window.map.mapPinMain.removeEventListener('mousedown', doListenMapPinMain);
  window.map.mapPinMain.removeEventListener('keydown', doListenMapPinMain);
};

window.map.mapPinMain.addEventListener('mousedown', doListenMapPinMain);
window.map.mapPinMain.addEventListener('keydown', doListenMapPinMain);
