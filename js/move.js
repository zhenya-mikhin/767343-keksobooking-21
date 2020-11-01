'use strict';

(function () {

  const mapPinMain = document.querySelector('.map__pin--main');

  mapPinMain.addEventListener('mousedown', function (evt) {

    const startMouseCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const startPinOffsets = {
      top  : mapPinMain.offsetTop,
      left : mapPinMain.offsetLeft
    }

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startMouseCoords.x - moveEvt.clientX,
        y: startMouseCoords.y - moveEvt.clientY
      };

      mapPinMain.style.top = window.util.getValidCoords(startPinOffsets.top - shift.y, 130, 630) + 'px';
      mapPinMain.style.left = window.util.getValidCoords(startPinOffsets.left - shift.x, 0, 1130) + 'px';
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
