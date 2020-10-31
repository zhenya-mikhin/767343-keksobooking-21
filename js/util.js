'use strict';

(function () {
  const error = document.querySelector('#error').content.querySelector('.error');
  const success = document.querySelector('#success').content.querySelector('.success');

  const getErrorMessage = function (message) {
    const getError = error.cloneNode(true);
    const getMessage = getError.querySelector('p');
    getMessage.textContent = message;
    document.main.insertAdjacentElement('afterbegin', getError);
  };
  const getSuccessMessage = function () {
    const getSuccess = success.cloneNode(true);
    document.insertAdjacentElement('afterbegin', getSuccess);
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

  window.util = {
    getRandomNumber: getRandomNumber,
    getRandomArray: getRandomArray,
    getErrorMessage: getErrorMessage,
    getSuccessMessage: getSuccessMessage
  };
})();
