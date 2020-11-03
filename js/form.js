'use strict';

(function () {

  const adForm = document.querySelector('.ad-form');
  const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
  const adFormHeader = adForm.querySelector('.ad-form-header');
  // const adFormReset = adForm.querySelectorAll('.ad-form__reset');

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
    window.data.map.classList.remove('map--faded');
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

  const errorHandler = function () {
    window.util.getErrorMessage();
  };

  const submitHandler = function (evt) {
    window.load.upLoad(new FormData(adForm), successHandler, errorHandler);
    evt.preventDefault();
  };

  adForm.addEventListener('submit', submitHandler);

  /*
  adFormReset.addEventListener('click', function (evt) {
    evt.preventDefault();
  });
  */

  window.form = {
    deActivationForm: deActivationForm,
    isActivationForm: isActivationForm,
    activationForm: activationForm
  };

})();
