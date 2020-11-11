'use strict';

const mapFilter = document.querySelector('.map__filters');
const typeSelect = mapFilter.querySelector('#housing-type');
const priceSelect = mapFilter.querySelector('#housing-price');
const roomsSelect = mapFilter.querySelector('#housing-rooms');
const guestsSelect = mapFilter.querySelector('#housing-guests');
const featuresFieldset = mapFilter.querySelector('#housing-features');
const mapFilterItems = mapFilter.querySelectorAll('select, input');

const PINS_LIMIT = 5;

const priceRange = {
  low: {
    MIN: 0,
    MAX: 10000
  },
  middle: {
    MIN: 10000,
    MAX: 50000
  },
  high: {
    MIN: 50000,
    MAX: Infinity
  }
};

let data = [];
let filteredData = [];

const filtrationItem = function (it, item, key) {
  return it.value === 'any' ? true : it.value === item[key].toString();
};

const filtrationByType = function (item) {
  return filtrationItem(typeSelect, item.offer, 'type');
};

const filtrationByPrice = function (item) {
  const filteringPrice = priceRange[priceSelect.value];
  return filteringPrice ? item.offer.price >= filteringPrice.MIN && item.offer.price <= filteringPrice.MAX : true;
};

const filtrationByRooms = function (item) {
  return filtrationItem(roomsSelect, item.offer, 'rooms');
};

const filtrationByGuests = function (item) {
  return filtrationItem(guestsSelect, item.offer, 'guests');
};

const filtrationByFeatures = function (item) {
  const checkedFeaturesItems = featuresFieldset.querySelectorAll('input:checked');
  return Array.from(checkedFeaturesItems).every(function (element) {
    return item.offer.features.includes(element.value);
  });
};

const onFilterChange = window.debounce(function () {
  filteredData = data.slice(0);
  filteredData = filteredData.filter(filtrationByType).filter(filtrationByPrice).filter(filtrationByRooms).filter(filtrationByGuests).filter(filtrationByFeatures);
  window.pin.removePin();
  window.card.removeMapCard();
  window.map.renderPins(filteredData.slice(0, PINS_LIMIT));
});

const activateFilter = function () {
  mapFilterItems.forEach(function (it) {
    it.disabled = false;
  });
  onFilterChange();
  mapFilter.addEventListener('change', onFilterChange);
};

const resetFilter = function () {
  mapFilterItems.forEach(function (it) {
    it.value = 'any';
  });
  const featuresItems = featuresFieldset.querySelectorAll('input');
  featuresItems.forEach(function (feature) {
    feature.checked = false;
  });
};

const deactivateFilter = function () {
  mapFilterItems.forEach(function (it) {
    it.disabled = true;
  });
  resetFilter();
  mapFilter.removeEventListener('change', onFilterChange);
};

const activateFiltration = function (adData) {
  data = adData.slice(0);
  activateFilter();
  return adData.slice(0, PINS_LIMIT);
};

window.filter = {
  activateFiltration: activateFiltration,
  deactivateFilter: deactivateFilter
};
