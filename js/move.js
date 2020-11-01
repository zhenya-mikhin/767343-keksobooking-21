'use strict';

(function () {

  const mapPinMain = document.querySelector('.map__pin--main');

  mapPinMain.addEventListener('mousedown', function (evt) {

    const startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;
      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      const mapPinMainPosition = {
        x: mapPinMain.offsetLeft - shift.x,
        y: mapPinMain.offsetTop - shift.y
      };
      /*
      const border = {
        TOP: window.data.LIMITS.Y.MIN - mapPinMain.offsetHeight,
        BOTTOM: window.data.LIMITS.Y.MAX - mapPinMain.offsetHeight,
        LEFT: window.data.LIMITS.X.MIN,
        RIGHT: window.data.LIMITS.X.MAX - mapPinMain.offsetWidth
      };
      */

      let getValidCoords = function (coords, min, max) {
        coords = parseInt(coords, 10);
        if (coords > max) {
          return max;
        } else if (coords < min) {
          return min;
        }
        return coords;
      };

      mapPinMain.style.left = getValidCoords(mapPinMainPosition.x, 0, 1200) + 'px';
      mapPinMain.style.top = getValidCoords(mapPinMainPosition.y, 130, 630) + 'px';
      /*
      if (mapPinMainPosition.x >= border.LEFT && mapPinMainPosition.x <= border.RIGHT) {
        mapPinMain.style.left = mapPinMainPosition.x + 'px';
      }
      if (mapPinMainPosition.y >= border.TOP && mapPinMainPosition.y <= border.BOTTOM) {
        mapPinMain.style.top = mapPinMainPosition.y + 'px';
      }
      */

      console.log(mapPinMain.style.left);
      console.log(mapPinMain.style.top);
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          mapPinMain.removeEventListener('click', onClickPreventDefault);
        };
        mapPinMain.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
