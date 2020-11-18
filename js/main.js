'use strict';

const addressInput = document.querySelector(`#address`);

const adAddress = function (coords) {
  addressInput.value = Math.round(coords.x) + `, ` + Math.round(coords.y);
};

const doRenderPinsAndCard = function () {
  window.load.onLoad(window.filter.activateFiltration, onerror);
};
const mapPinMainHandle = function (evt) {
  if (evt.button === 0 || evt.key === `Enter`) {
    window.form.activationForm();
    doRenderPinsAndCard();
  }
  window.map.mapPinMain.removeEventListener(`mousedown`, mapPinMainHandle);
  window.map.mapPinMain.removeEventListener(`keydown`, mapPinMainHandle);
};

adAddress(window.util.initialPinCoords);

window.map.mapPinMain.addEventListener(`mousedown`, mapPinMainHandle);
window.map.mapPinMain.addEventListener(`keydown`, mapPinMainHandle);

window.main = {
  adAddress,
  mapPinMainHandle
};
