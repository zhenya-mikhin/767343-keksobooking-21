'use strict';

(function () {

  const adForm = document.querySelector('.ad-form');
  const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
  const roomNumber = adForm.querySelector('#room_number');
  const capacity = adForm.querySelector('#capacity');
  const adFormHeader = adForm.querySelector('.ad-form-header');
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
    window.data.map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    adFormHeader.disabled = false;
    for (let i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].disabled = false;
    }
  };

  window.form = {
    deActivationForm: deActivationForm,

    activationForm: activationForm
  };

  roomNumber.addEventListener('change', doListenRoomNumber);

})();
