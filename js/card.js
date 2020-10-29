'use strict';

(function () {
  const mapCard = document.querySelector('#card').content.querySelector('.map__card');
  const mapFiltersContainer = document.querySelector('.map__filters-container');

  const createFeatures = function (array) {
    const fragment = document.createDocumentFragment();
    array.forEach(function (elem) {
      const container = document.createElement('li');
      container.className = 'feature';
      container.classList.add('feature--' + elem);
      fragment.appendChild(container);
    });
    return fragment;
  };

  const createPhotos = function (array) {
    const fragment = document.createDocumentFragment();
    array.forEach(function (elem) {
      const image = document.createElement('img');
      image.src = elem;
      fragment.appendChild(image);
    });
    return fragment;
  };

  const createCard = function (array) {
    const adCard = mapCard.cloneNode(true);
    adCard.querySelector('.popup__avatar').src = array['author']['avatar'];
    adCard.querySelector('.popup__title').textContent = array[0].offer.title;
    adCard.querySelector('.popup__text--address').textContent = array[0].offer.adress;
    adCard.querySelector('.popup__text--price').textContent = array[0].offer.price + '&#x20bd;/ночь';
    adCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + array[0].offer.checkin + ', выезд до ' + array[0].offer.checkout;

    const adCardType = adCard.querySelector('.popup__type');
    if (array[0].offer.type === 'flat') {
      adCardType.textContent = 'Квартира';
    } else if (array[0].offer.type === 'bungalo') {
      adCardType.textContent = 'Бунгало';
    } else {
      adCardType.textContent = 'Дом';
    }

    const adCardDescription = adCard.querySelector('.popup__description');
    if (!array[0].offer.description) {
      adCard.removeChild(adCardDescription);
    } else {
      adCardDescription.textContent = array[0].offer.description;
    }

    const adCardFeatures = adCard.querySelector('.popup__features');
    if (array[0].offer.features.length) {
      createFeatures(array, adCardFeatures);
    } else {
      adCard.removeChild(adCardFeatures);
    }

    const adCardPhotos = adCard.querySelector('.popup__photos');
    if (array[0].offer.photos.length) {
      createPhotos(array, adCardPhotos);
    } else {
      adCard.removeChild(adCardPhotos);
    }

    return adCard;
  };
  const renderCard = function (dataCard) {
    const mapCardFragment = document.createDocumentFragment();
    mapCardFragment.appendChild(createCard(dataCard));
    window.data.map.insertBefore(createCard, mapFiltersContainer);
  };

  window.card = renderCard;
})();
