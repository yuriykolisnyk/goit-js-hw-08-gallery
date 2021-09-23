import itemsDefault from "./app.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"), //общий родитель картинок
  modal: document.querySelector(".js-lightbox"), //модальное окно
  modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'), //кнопка закрытия модального окна
  modalImage: document.querySelector(".lightbox__image"),
  modalOverlay: document.querySelector(".lightbox__overlay"), //серый фон в модалке
};

const galleryMarkup = createGalleryMarkup(itemsDefault);
refs.galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}
