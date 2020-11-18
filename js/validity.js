'use strict';

const PriceRelation = {
  bungalow: {
    number: 0,
    string: `0`
  },
  flat: {
    number: 1000,
    string: `1000`
  },
  house: {
    number: 5000,
    string: `5000`
  },
  palace: {
    number: 10000,
    string: `10000`
  }
};

const adForm = document.querySelector(`.ad-form`);
const typeInput = adForm.querySelector(`#type`);
const priceInput = adForm.querySelector(`#price`);
const roomNumber = adForm.querySelector(`#room_number`);
const timeInInput = document.querySelector(`#timein`);
const timeOutInput = document.querySelector(`#timeout`);
const capacity = adForm.querySelector(`#capacity`);

typeInput.addEventListener(`change`, function (evt) {
  switch (evt.target.value) {
    case `bungalow`:
      priceInput.min = PriceRelation.bungalow.number;
      priceInput.placeholder = PriceRelation.bungalow.string;
      break;
    case `flat`:
      priceInput.min = PriceRelation.flat.number;
      priceInput.placeholder = PriceRelation.flat.string;
      break;
    case `house`:
      priceInput.min = PriceRelation.house.number;
      priceInput.placeholder = PriceRelation.house.string;
      break;
    case `palace`:
      priceInput.min = PriceRelation.palace.number;
      priceInput.placeholder = PriceRelation.palace.string;
      break;
  }
});

timeInInput.addEventListener(`change`, function (evt) {
  timeOutInput.value = evt.target.value;
});
timeOutInput.addEventListener(`change`, function (evt) {
  timeInInput.value = evt.target.value;
});

const doListenRoomNumber = function () {
  let currentValue;
  capacity.value = (roomNumber.value === `100`) ? `0` : roomNumber.value;
  currentValue = capacity.value;

  for (let i = 0; i < capacity.options.length; i++) {
    capacity.options[i].disabled = (currentValue === `0`) ?
      (capacity.options[i].value !== `0`) :
      (capacity.options[i].value > currentValue || capacity.options[i].value === `0`);
  }
};

const setDefaultTypePrice = function() {
  priceInput.min = PriceRelation.flat.number;
  priceInput.placeholder = PriceRelation.flat.string;
}

roomNumber.addEventListener(`change`, doListenRoomNumber);

setDefaultTypePrice();
doListenRoomNumber();
