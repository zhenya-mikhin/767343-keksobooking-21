'use strict';

const mapPinMain = document.querySelector(`.map__pin--main`);

mapPinMain.addEventListener(`mousedown`, function (evt) {

  const startMouseCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  const startPinOffsets = {
    top: mapPinMain.offsetTop,
    left: mapPinMain.offsetLeft
  };

  let dragged = false;

  const onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    dragged = true;
    const shift = {
      x: startMouseCoords.x - moveEvt.clientX,
      y: startMouseCoords.y - moveEvt.clientY
    };

    const border = {
      TOP: window.data.LIMITS.Y.MIN - mapPinMain.offsetHeight,
      BOTTOM: window.data.LIMITS.Y.MAX - mapPinMain.offsetHeight,
      LEFT: window.data.LIMITS.X.MIN,
      RIGHT: window.data.LIMITS.X.MAX - mapPinMain.offsetWidth
    };

    mapPinMain.style.left = window.util.getValidCoords(startPinOffsets.left - shift.x, border.LEFT, border.RIGHT) + `px`;
    mapPinMain.style.top = window.util.getValidCoords(startPinOffsets.top - shift.y, border.TOP, border.BOTTOM) + `px`;

    const mapPinMainCurrentCoords = {
      x: startPinOffsets.left - shift.x,
      y: startPinOffsets.top - shift.y
    };

    window.main(mapPinMainCurrentCoords);
  };

  const onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener(`mousemove`, onMouseMove);
    document.removeEventListener(`mouseup`, onMouseUp);

    if (dragged) {
      const onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        mapPinMain.removeEventListener(`click`, onClickPreventDefault);
      };
      mapPinMain.addEventListener(`click`, onClickPreventDefault);
    }
  };
  document.addEventListener(`mousemove`, onMouseMove);
  document.addEventListener(`mouseup`, onMouseUp);
});
