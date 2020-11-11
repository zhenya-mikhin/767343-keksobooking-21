'use strict';

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const adFormHeader = adForm.querySelector('.ad-form-header');

let isActivationForm = false;

const deActivationForm = function () {
  adForm.reset();
  adForm.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = true;
  }
};

deActivationForm();

const activationForm = function () {
  isActivationForm = true;
  window.map.mapMain.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = false;
  }
};

const successHandler = function () {
  window.util.getSuccessMessage();
  window.data.map.classList.add('map--faded');
  deActivationForm();
};

const errorHandler = function (message) {
  window.util.getErrorMessage(message);
};

const submitHandler = function (evt) {
  window.load.upLoad(new FormData(adForm), successHandler, errorHandler);
  evt.preventDefault();
};

adForm.addEventListener('submit', submitHandler);

window.form = {
  deActivationForm: deActivationForm,
  isActivationForm: isActivationForm,
  activationForm: activationForm
};
