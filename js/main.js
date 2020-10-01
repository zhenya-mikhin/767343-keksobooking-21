'use strict';

const map = document.querySelector('.map');
const mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
const mapPins = document.querySelector('.map__pins');
const arrayObj = [];
const amountAds = 8;

const templateObj = {
  author: {
    avatars: []
  },
  offer: {
    titles: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    price: {
      min: 1000,
      max: 100000
    },
    types: [
      'palace',
      'flat',
      'house',
      'bungalow'
    ],
    rooms: {
      min: 1,
      max: 100
    },
    guests: {
      min: 0,
      max: 4
    },
    checkins: [
      '12:00',
      '13:00',
      '14:00'
    ],
    checkouts: [
      '12:00',
      '13:00',
      '14:00'
    ],
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner'
    ],
    description: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    photos: [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
    ]
  },
  location: {
    x: {
      min: 130,
      max: 1200
    },
    y: {
      min: 130,
      max: 630
    }
  }
};

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = function (arr) {
  const copyArray = arr.slice(0);
  const length = getRandomNumber(0, arr.length);
  copyArray.slice(0, length);
  return copyArray;
};

const createObj = function (index) {
  const randomLocationX = getRandomNumber(templateObj.location.x.min, templateObj.location.x.max);
  const randomLocationY = getRandomNumber(templateObj.location.y.min, templateObj.location.y.max);
  const obj = {
    author: {
      avatar: 'img/avatars/user0' + (index + 1) + '.png'
    },
    offer: {
      title: templateObj.offer.titles[index],
      address: randomLocationX + ',' + randomLocationY,
      price: getRandomNumber(templateObj.offer.price.min, templateObj.offer.price.max),
      type: templateObj.offer.types[getRandomNumber(0, templateObj.offer.types.length - 1)],
      rooms: getRandomNumber(templateObj.offer.rooms.min, templateObj.offer.rooms.max),
      guests: getRandomNumber(templateObj.offer.guests.min, templateObj.offer.guests.max),
      checkin: templateObj.offer.checkins[getRandomNumber(0, templateObj.offer.checkins.length - 1)],
      checkout: templateObj.offer.checkouts[getRandomNumber(0, templateObj.offer.checkouts.length - 1)],
      features: getRandomArray(templateObj.offer.features),
      description: '',
      photos: getRandomArray(templateObj.offer.photos)
    },
    location: {
      x: randomLocationX,
      y: randomLocationY
    }
  };
  return obj;
};

const renderObjects = function (amount) {
  for (let i = 0; i < amount; i++) {
    arrayObj[i] = createObj(i);
  }
  return arrayObj;
};
renderObjects(amountAds);

// У блока .map убераю класс .map--faded
map.classList.remove('map--faded');
