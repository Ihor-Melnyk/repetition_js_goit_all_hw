import { galleryItems } from "./gallery-items.js";

const markup = galleryItems
  .map(
    ({ description, original, preview }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

const ulElem = document.querySelector(".gallery");
ulElem.insertAdjacentHTML("beforeend", markup);

ulElem.addEventListener("click", handleClickImage);
function handleClickImage(e) {
  if (e.target.nodeName != "IMG") return;
  e.preventDefault();

  const handleKeyEscape = (e) => {
    if (e.key !== "Escape") return;
    instance.close();
  };

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: (instance) => window.addEventListener("keydown", handleKeyEscape),
    onClose: (instance) => window.removeEventListener("keydown", handleKeyEscape),
  });

  instance.show();
}
