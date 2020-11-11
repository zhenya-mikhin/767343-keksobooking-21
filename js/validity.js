'use strict';

const adForm = document.querySelector('.ad-form');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');
const capacity = adForm.querySelector('#capacity');

typeInput.addEventListener('change', function (evt) {
  switch (evt.target.value) {
    case 'bungalo':
      priceInput.min = 0;
      priceInput.placeholder = '0';
      break;
    case 'flat':
      priceInput.min = 1000;
      priceInput.placeholder = '1000';
      break;
    case 'house':
      priceInput.min = 5000;
      priceInput.placeholder = '5000';
      break;
    case 'palace':
      priceInput.min = 10000;
      priceInput.placeholder = '10000';
      break;
  }
});

timeInInput.addEventListener('change', function (evt) {
  timeOutInput.value = evt.target.value;
});
timeOutInput.addEventListener('change', function (evt) {
  timeInInput.value = evt.target.value;
});

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

roomNumber.addEventListener('change', doListenRoomNumber);
