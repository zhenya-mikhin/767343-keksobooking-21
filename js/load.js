'use strict';


const urlLoad = {
  GET: `https://21.javascript.pages.academy/keksobooking/data`,
  POST: `https://21.javascript.pages.academy/keksobooking`
};

let createXhr = function (metod, url, onSuccess, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener(`load`, function () {
    let error = ``;
    switch (xhr.status) {
      case 200:
        onSuccess(xhr.response);
        break;
      case 400:
        error = `Неверный запрос`;
        break;
      case 401:
        error = `Пользователь не авторизован`;
        break;
      case 404:
        error = `Ничего не найдено`;
        break;
      default:
        error = `Cтатус ответа: ` + xhr.status + ` ` + xhr.statusText;
    }

    if (error) {
      onError(error);
    }
  });

  xhr.addEventListener(`error`, function () {
    onError(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, function () {
    onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });

  xhr.timeout = 20000;

  xhr.open(metod, url);

  return xhr;
};

let onLoad = function (onSuccess, onError) {
  createXhr(`GET`, urlLoad.GET, onSuccess, onError).send();
};

let upLoad = function (data, onSuccess, onError) {
  createXhr(`POST`, urlLoad.POST, onSuccess, onError).send(data);
};

window.load = {
  onLoad,
  upLoad
};

