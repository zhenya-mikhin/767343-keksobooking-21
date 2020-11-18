'use strict';

const adForm = document.querySelector(`.ad-form`);
const adFormFieldsets = adForm.querySelectorAll(`.ad-form__element`);
const adFormHeader = adForm.querySelector(`.ad-form-header`);
const adFormReset = adForm.querySelector(`.ad-form__reset`);

let isActivationForm = false;

const deActivationForm = function () {
  adForm.reset();
  adForm.classList.add(`ad-form--disabled`);
  adFormHeader.disabled = true;
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = true;
  }
};

deActivationForm();

const activationForm = function () {
  isActivationForm = true;
  window.map.mapMain.classList.remove(`map--faded`);
  adForm.classList.remove(`ad-form--disabled`);
  adFormHeader.disabled = false;
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = false;
  }
};

const formResetHandler = function () {
  deActivationForm();
  window.map.mapMain.classList.add(`map--faded`);
  window.pin.removePin();
  window.util.getPinMainInitialCoords();
  document.removeEventListener(`mouseup`, formResetHandler);
};

adFormReset.addEventListener(`click`, formResetHandler);

const successHandler = function () {
  window.util.getSuccessMessage();
  window.data.map.classList.add(`map--faded`);
  deActivationForm();
};

const errorHandler = function (message) {
  window.util.getErrorMessage(message);
};

const submitHandler = function (evt) {
  window.load.upLoad(new FormData(adForm), successHandler, errorHandler);
  evt.preventDefault();
  document.removeEventListener(`click`, submitHandler);
  document.removeEventListener(`keydown`, submitHandler);
};

adForm.addEventListener(`submit`, submitHandler);


window.form = {
  deActivationForm,
  isActivationForm,
  activationForm
};
