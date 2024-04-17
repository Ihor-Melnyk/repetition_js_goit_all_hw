import { galleryItems } from "./gallery-items.js";

const markUp = galleryItems
  .map(
    ({ description, original, preview }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");
const ulElem = document.querySelector(".gallery");
ulElem.insertAdjacentHTML("beforeend", markUp);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
