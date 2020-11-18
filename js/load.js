'use strict';


const urlLoad = {
  GET: `https://21.javascript.pages.academy/keksobooking/data`,
  POST: `https://21.javascript.pages.academy/keksobooking`
};
const TIMEOUT = 20000;
const CASE_ERROR = {
  success: 200,
  errorResponse: 400,
  errorUser: 401,
  errorSite: 404
};

let createXhr = function (method, url, onSuccess, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener(`load`, function () {
    let error = ``;
    switch (xhr.status) {
      case CASE_ERROR.success:
        onSuccess(xhr.response);
        break;
      case CASE_ERROR.errorResponse:
        error = `Неверный запрос`;
        break;
      case CASE_ERROR.errorUser:
        error = `Пользователь не авторизован`;
        break;
      case CASE_ERROR.errorSite:
        error = `Ничего не найдено`;
        break;
      default:
        error = `Cтатус ответа: ` + xhr.status + ` ` + xhr.statusText;
    }

    if (error) {
      onError = window.util.getErrorMessage(error);
    }
  });

  xhr.addEventListener(`error`, function () {
    window.util.getErrorMessage(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, function () {
    onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });

  xhr.timeout = TIMEOUT;

  xhr.open(method, url);

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

