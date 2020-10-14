'use strict';

(function () {

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

  const addressInput = document.querySelector('#address');

  window.data = {
    ARROW_HEIGHT: 18,
    map: document.querySelector('.map'),

    createAdsObj: function (index) {
      const obj = {
        author: {
          avatar: 'img/avatars/user0' + (index + 1) + '.png'
        },
        offer: {
          title: TITLES[index],
          address: window.util.getRandomNumber(LOCATION.x.min, LOCATION.x.max) + ', ' + window.util.getRandomNumber(LOCATION.y.min, LOCATION.y.max),
          price: window.util.getRandomNumber(PRICE.min, PRICE.max),
          type: TYPES[window.util.getRandomNumber(0, TYPES.length - 1)],
          rooms: window.util.getRandomNumber(ROOMS.min, ROOMS.max),
          guests: window.util.getRandomNumber(GUESTS.min, GUESTS.max),
          checkin: CHECKINS[window.util.getRandomNumber(0, CHECKINS.length - 1)],
          checkout: CHECKOUTS[window.util.getRandomNumber(0, CHECKOUTS.length - 1)],
          features: window.util.getRandomArray(FEATURES),
          description: '',
          photos: window.util.getRandomArray(PHOTOS)
        },
        location: {
          x: window.util.getRandomNumber(LOCATION.x.min, LOCATION.x.max),
          y: window.util.getRandomNumber(LOCATION.y.min, LOCATION.y.max)
        }
      };
      return obj;
    },

    createAdsObjects: function (amount) {
      const adsArray = [];
      for (let i = 0; i < amount; i++) {
        adsArray[i] = window.data.createAdsObj(i);
      }
      return adsArray;
    },

    adAddress: function () {
      addressInput.value = Math.round((window.map.mapPinMain.offsetLeft + window.map.mapPinMain.offsetWidth / 2)) + ', ' + Math.round((window.map.mapPinMain.offsetTop + window.map.mapPinMain.offsetHeight + window.data.ARROW_HEIGHT));
    }

  };

})();
