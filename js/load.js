'use strict';

(function () {
  const URL = {
    GET: 'https://21.javascript.pages.academy/keksobooking/data',
    POST: 'https://21.javascript.pages.academy/keksobooking'
  };
  const createXhr = function (metod, url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      const error = '';
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open(metod, url);

    return xhr;
  };

  const onLoad = function (onSuccess, onError) {
    createXhr('GET', URL.GET, onSuccess, onError).send();
  };

  const upLoad = function (data, onSuccess, onError) {
    createXhr('POST', URL.POST, onSuccess, onError).send(data);
  };

  window.load = {
    onLoad: onLoad,
    upLoad: upLoad
  };
})();
