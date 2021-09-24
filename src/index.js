import galleryItems from "./app.js";

const galleryContainer = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const overlayClose = document.querySelector(".lightbox__overlay");
const modalBtnClose = document.querySelector(".lightbox__button");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  galleryCardMarkup(galleryItems)
);

function galleryCardMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                    <a class="gallery__link"
                     href='${original}'>
                         <img class="gallery__image"
                          src='${preview}'
                          data-source='${original}'
                          alt='${description}' />
                    </a>
                    </li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", modalOpen);

function modalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.classList.add("is-open");
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
  modalBtnClose.addEventListener("click", modalClose);
  overlayClose.addEventListener("click", modalCloseByOverlayClick);
  document.addEventListener("keydown", modalCloseByEsc);
}

function modalClose(event) {
  modal.classList.remove("is-open");
  modalBtnClose.removeEventListener("click", modalClose);
  overlayClose.removeEventListener("click", modalCloseByOverlayClick);
  document.removeEventListener("keydown", modalCloseByEsc);
}

function modalCloseByOverlayClick(event) {
  if (event.currentTarget === event.target) {
    modalClose(event);
  }
}

function modalCloseByEsc(event) {
  if (event.code === "Escape") {
    modalClose(event);
  }
}
