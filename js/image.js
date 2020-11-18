'use strict';

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
const DEFAULT_AVATAR = `img/muffin-grey.svg`;

const ImageParams = {
  WIDTH: `70px`,
  HEIGHT: `70px`,
  BORDER_RADIUS: `5px`
};

const avatarPreview = document.querySelector(`.ad-form-header__preview img`);
const imagesContainer = document.querySelector(`.ad-form__photo-container`);
const avatarChooser = document.querySelector(`#avatar`);
const imageChooser = document.querySelector(`#images`);

const filtrationByCorrectType = function (file) {
  return FILE_TYPES.some(function (it) {
    return file.name.toLowerCase().endsWith(it);
  });
};

const changeAvatar = function (src) {
  avatarPreview.src = src;
};

const removeEmptyImgWrap = function () {
  const emptyImgWrap = document.querySelector(`.ad-form__photo--empty`);
  if (emptyImgWrap) {
    emptyImgWrap.remove();
  }
};

const addImages = function (src) {
  const newImageWrap = document.createElement(`div`);
  const image = document.createElement(`img`);
  newImageWrap.classList.add(`ad-form__photo`);
  newImageWrap.classList.add(`ad-form__photo--added`);
  image.src = src;
  image.style.width = ImageParams.WIDTH;
  image.style.height = ImageParams.HEIGHT;
  image.style.borderRadius = ImageParams.BORDER_RADIUS;
  newImageWrap.appendChild(image);
  imagesContainer.appendChild(newImageWrap);
  removeEmptyImgWrap();
};

const addEmptyImgWrap = function () {
  if (!document.querySelector(`.ad-form__photo--empty`)) {
    const emptyImgWrap = document.createElement(`div`);
    emptyImgWrap.classList.add(`ad-form__photo`);
    emptyImgWrap.classList.add(`ad-form__photo--empty`);
    imagesContainer.appendChild(emptyImgWrap);
  }
};

const loadFile = function (chooser, func) {
  const files = Array.from(chooser.files).filter(filtrationByCorrectType);
  if (files) {
    files.forEach(function (it) {
      const reader = new FileReader();
      reader.addEventListener(`load`, function (evt) {
        func(evt.target.result);
      });
      reader.readAsDataURL(it);
    });
  }
};

const removeImages = function () {
  avatarPreview.src = DEFAULT_AVATAR;
  const addedImages = document.querySelectorAll(`.ad-form__photo--added`);
  if (addedImages) {
    addedImages.forEach(function (it) {
      it.remove();
    });
  }
  addEmptyImgWrap();
};

const onAvatarChange = function (evt) {
  loadFile(evt.target, changeAvatar);
};

const onPhotoChange = function (evt) {
  loadFile(evt.target, addImages);
};

const activate = function () {
  avatarChooser.addEventListener(`change`, onAvatarChange);
  imageChooser.addEventListener(`change`, onPhotoChange);
};

const deactivate = function () {
  avatarChooser.removeEventListener(`change`, onAvatarChange);
  imageChooser.removeEventListener(`change`, onPhotoChange);
};

window.loadImage = {
  activate,
  deactivate,
  remove: removeImages
};
