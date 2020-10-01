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
