'use strict';

(function () {
  const map = document.querySelector('.map');
  const mapCard = document.querySelector('#card').content.querySelector('.map__card');
  const mapFiltersContainer = document.querySelector('.map__filters-container');

  const createFeatures = function (items) {
    const fragment = document.createDocumentFragment();
    items.forEach(function (elem) {
      const container = document.createElement('li');
      container.className = 'popup__feature';
      container.classList.add('popup__feature--' + elem);
      fragment.appendChild(container);
    });
    return fragment;
  };

  const createPhotos = function (items) {
    const fragment = document.createDocumentFragment();
    items.forEach(function (elem) {
      const image = document.createElement('img');
      image.src = elem;
      image.width = '45';
      image.height = '45';
      image.alt = elem.alt;
      fragment.appendChild(image);
    });
    return fragment;
  };

  const createCard = function (data) {
    const adCard = mapCard.cloneNode(true);
    adCard.querySelector('.popup__avatar').src = data['author']['avatar'];
    adCard.querySelector('.popup__title').textContent = data['offer']['title'];
    adCard.querySelector('.popup__text--address').textContent = data['offer']['adress'];
    adCard.querySelector('.popup__text--price').innerHTML = data['offer']['price'] + '&#x20bd;/ночь';
    adCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + data['offer']['checkin'] + ', выезд до ' + data['offer']['checkout'];

    const adCardType = adCard.querySelector('.popup__type');
    if (data['offer']['type'] === 'flat') {
      adCardType.textContent = 'Квартира';
    } else if (data['offer']['type'] === 'bungalo') {
      adCardType.textContent = 'Бунгало';
    } else {
      adCardType.textContent = 'Дом';
    }

    const adCardDescription = adCard.querySelector('.popup__description');
    if (!data.offer.description) {
      adCard.removeChild(adCardDescription);
    } else {
      adCardDescription.textContent = data.offer.description;
    }

    const adCardFeatures = adCard.querySelector('.popup__features');
    if (data.offer.features.length) {
      adCardFeatures.textContent = '';
      adCardFeatures.appendChild(createFeatures(data['offer']['features']));
    } else {
      adCard.removeChild(adCardFeatures);
    }

    const adCardPhotos = adCard.querySelector('.popup__photos');
    if (data.offer.photos.length) {
      adCardPhotos.textContent = '';
      adCardPhotos.appendChild(createPhotos(data.offer.photos));
    } else {
      adCard.removeChild(adCardPhotos);
    }

    const removeCard = function (evt) {
      evt.preventDefault();
      if (evt.target.dataset.class || evt.key === 'Escape') {
        adCard.remove();
      }

      adCard.removeEventListener('click', removeCard);
    };

    adCard.addEventListener('click', removeCard);

    document.addEventListener('keydown', removeCard);

    return adCard;
  };

  const removeMapCard = function () {
    const mapCardAd = map.querySelector('.map__card');
    if (mapCardAd) {
      mapCardAd.remove();
    }
  };

  const renderCard = function (dataCard) {
    const mapCardFragment = document.createDocumentFragment();

    mapCardFragment.appendChild(createCard(dataCard));

    map.insertBefore(mapCardFragment, mapFiltersContainer);
  };

  window.card = {
    renderCard: renderCard,
    removeMapCard: removeMapCard
  };
})();
