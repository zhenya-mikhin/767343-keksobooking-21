'use strict';

(function () {

  const adForm = document.querySelector('.ad-form');
  const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
  // const adFormReset = adForm.querySelectorAll('.ad-form__reset');
  const roomNumber = adForm.querySelector('#room_number');
  const capacity = adForm.querySelector('#capacity');
  const adFormHeader = adForm.querySelector('.ad-form-header');
  const isActivationForm = false;
  const doListenRoomNumber = function () {
    let currentValue;
    capacity.value = (roomNumber.value === '100') ? '0' : roomNumber.value;
    currentValue = capacity.value;

    for (let i = 0; i < capacity.options.length; i++) {
      capacity.options[i].disabled = (currentValue === '0') ?
        (capacity.options[i].value !== '0') :
        (capacity.options[i].value > currentValue || capacity.options[i].value === '0');
    }
  };
  const deActivationForm = function () {
    adFormHeader.disabled = true;
    for (let i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].disabled = true;
    }
  };
  const activationForm = function () {
    window.form.isActivationForm = true;
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
  };

  const errorHandler = function () {
    window.util.getErrorMessage();
  };

  const submitHandler = function (evt) {
    window.load.upLoad(new FormData(adForm), successHandler, errorHandler);
    evt.preventDefault();
  };

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

  roomNumber.addEventListener('change', doListenRoomNumber);

  adForm.addEventListener('submit', submitHandler);

})();
