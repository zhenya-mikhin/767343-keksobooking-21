'use strict';

const main = document.querySelector(`main`);
const error = document.querySelector(`#error`).content.querySelector(`.error`);
const success = document.querySelector(`#success`).content.querySelector(`.success`);
const mapPinMain = document.querySelector(`.map__pin--main`);

const initialPinCoords = {
  x: 570,
  y: 375
};

const getPinMainInitialCoords = function () {
  mapPinMain.style.left = initialPinCoords.x + `px`;
  mapPinMain.style.top = initialPinCoords.y + `px`;
};

const getErrorMessage = function (message) {
  const getError = error.cloneNode(true);
  const getMessage = getError.querySelector(`p`);
  const errorButton = getError.querySelector(`.error__button`);

  getMessage.textContent = message;
  main.insertAdjacentElement(`afterbegin`, getError);

  errorButton.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    window.map.deactivateMap();
    getError.remove();
  });
};
const getSuccessMessage = function () {
  const getSuccess = success.cloneNode(true);
  document.body.insertAdjacentElement(`afterbegin`, getSuccess);
  const messageDeleteHandle = function (evt) {
    if (evt.button === 0 || evt.key === `Enter`) {
      getSuccess.remove();
    }
    document.removeEventListener(`mousedown`, messageDeleteHandle);
    document.removeEventListener(`keydown`, messageDeleteHandle);
  };
  document.addEventListener(`mousedown`, messageDeleteHandle);
  document.addEventListener(`keydown`, messageDeleteHandle);
};

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = function (arr) {
  return arr.slice(0, window.util.getRandomNumber(0, arr.length));
};

let getValidCoords = function (coords, min, max) {
  coords = parseInt(coords, 10);
  if (coords > max) {
    return max;
  } else if (coords < min) {
    return min;
  }
  return coords;
};

window.util = {
  initialPinCoords,
  getPinMainInitialCoords,
  getRandomNumber,
  getRandomArray,
  getErrorMessage,
  getSuccessMessage,
  getValidCoords
};
