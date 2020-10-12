'use strict';

const map = document.querySelector('.map');
const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
const mapPins = map.querySelector('.map__pins');
const mapPinMain = map.querySelector('.map__pin--main');
const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const adFormHeader = adForm.querySelector('.ad-form-header');
const addressInput = adForm.querySelector('#address');
const ARROW_HEIGHT = 18;
addressInput.value = Math.round((mapPinMain.offsetLeft + mapPinMain.offsetWidth / 2)) + ', ' + Math.round((mapPinMain.offsetTop + mapPinMain.offsetHeight / 2));

const amountAds = 8;
const TITLES = ['', '', '', '', '', '', '', ''];
const PRICE = {min: 1000, max: 100000};
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const ROOMS = {min: 1, max: 100};
const GUESTS = {min: 0, max: 4};
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const LOCATION = {
  x: {
    min: 130,
    max: 1200
  },
  y: {
    min: 130,
    max: 630
  }
};

adFormHeader.disabled = true;
for (let i = 0; i < adFormFieldsets.length; i++) {
  adFormFieldsets[i].disabled = true;
}

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = function (arr) {
  const copyArray = arr.slice(0, getRandomNumber(0, arr.length));
  return copyArray;
};

const createAdsObj = function (index) {
  const obj = {
    author: {
      avatar: 'img/avatars/user0' + (index + 1) + '.png'
    },
    offer: {
      title: TITLES[index],
      address: getRandomNumber(LOCATION.x.min, LOCATION.x.max) + ', ' + getRandomNumber(LOCATION.y.min, LOCATION.y.max),
      price: getRandomNumber(PRICE.min, PRICE.max),
      type: TYPES[getRandomNumber(0, TYPES.length - 1)],
      rooms: getRandomNumber(ROOMS.min, ROOMS.max),
      guests: getRandomNumber(GUESTS.min, GUESTS.max),
      checkin: CHECKINS[getRandomNumber(0, CHECKINS.length - 1)],
      checkout: CHECKOUTS[getRandomNumber(0, CHECKOUTS.length - 1)],
      features: getRandomArray(FEATURES),
      description: '',
      photos: getRandomArray(PHOTOS)
    },
    location: {
      x: getRandomNumber(LOCATION.x.min, LOCATION.x.max),
      y: getRandomNumber(LOCATION.y.min, LOCATION.y.max)
    }
  };
  return obj;
};

const createAdsObjects = function (amount) {
  const adsArray = [];
  for (let i = 0; i < amount; i++) {
    adsArray[i] = createAdsObj(i);
  }
  return adsArray;
};

const createPin = function (dataPin) {
  const currentPin = mapPin.cloneNode(true);
  const currentPinImg = currentPin.querySelector('img');
  currentPinImg.src = dataPin['author']['avatar'];
  currentPinImg.alt = dataPin['offer']['title'];
  currentPin.style.left = dataPin['location']['x'] + 'px';
  currentPin.style.top = dataPin['location']['y'] + 'px';
  return currentPin;
};

const renderPins = function (dataPins) {
  const mapPinsFragment = document.createDocumentFragment();
  for (let i = 0; i < dataPins.length; i++) {
    mapPinsFragment.appendChild(createPin(dataPins[i]));
  }
  mapPins.appendChild(mapPinsFragment);
};

const activationForm = function () {
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = false;
  }
};

const adAddress = function () {
  addressInput.value = Math.round((mapPinMain.offsetLeft + mapPinMain.offsetWidth / 2)) + ', ' + Math.round((mapPinMain.offsetTop + mapPinMain.offsetHeight + ARROW_HEIGHT));
};

mapPinMain.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    activationForm();
    adAddress();
  }
  renderPins(createAdsObjects(amountAds));
});
mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activationForm();
    adAddress();
  }
  renderPins(createAdsObjects(amountAds));
});

roomNumber.addEventListener('change', function () {
  let currentValue;
  capacity.value = (roomNumber.value === '100') ? '0' : roomNumber.value;
  currentValue = capacity.value;

  for (let i = 0; i < capacity.options.length; i++) {
    capacity.options[i].disabled = (currentValue === '0') ?
      (capacity.options[i].value !== '0') :
      (capacity.options[i].value > currentValue || capacity.options[i].value === '0');
  }
});
