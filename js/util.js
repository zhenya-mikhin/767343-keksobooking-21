'use strict';

const error = document.querySelector('#error').content.querySelector('.error');
const success = document.querySelector('#success').content.querySelector('.success');
const main = document.querySelector('main');

const getErrorMessage = function (message) {
  const getError = error.cloneNode(true);
  const getMessage = getError.querySelector('p');
  const errorButton = getError.querySelector('.error__button');

  getMessage.textContent = message;
  main.insertAdjacentElement('afterbegin', getError);

  errorButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.map.deactivateMap();
    getError.remove();
  });
};
const getSuccessMessage = function () {
  const getSuccess = success.cloneNode(true);
  document.body.insertAdjacentElement('afterbegin', getSuccess);
};

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = function (arr) {
  const copyArray = arr.slice(0, window.util.getRandomNumber(0, arr.length));
  return copyArray;
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
  getRandomNumber: getRandomNumber,
  getRandomArray: getRandomArray,
  getErrorMessage: getErrorMessage,
  getSuccessMessage: getSuccessMessage,
  getValidCoords: getValidCoords
};
