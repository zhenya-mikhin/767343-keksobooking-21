'use strict';

(function () {

  window.map.mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    const startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;
      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      const mapPinMainPosition = {
        x: window.map.mapPinMain.offsetLeft - shift.x,
        y: window.map.mapPinMain.offsetTop - shift.y
      };
      const border = {
        TOP: window.data.LIMITS.Y.MIN - window.map.mapPinMain.offsetHeight,
        BOTTOM: window.data.LIMITS.Y.MAX - window.map.mapPinMain.offsetHeight,
        LEFT: window.data.LIMITS.X.MIN,
        RIGHT: window.data.LIMITS.X.MAX - window.map.mapPinMain.offsetWidth
      };
      if (mapPinMainPosition.x >= border.LEFT && mapPinMainPosition.x <= border.RIGHT) {
        window.map.mapPinMain.style.left = mapPinMainPosition.x + 'px';
      }
      if (mapPinMainPosition.y >= border.TOP && mapPinMainPosition.y <= border.BOTTOM) {
        window.map.mapPinMain.style.top = mapPinMainPosition.y + 'px';
      }
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          window.map.mapPinMain.removeEventListener('click', onClickPreventDefault);
        };
        window.map.mapPinMain.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
