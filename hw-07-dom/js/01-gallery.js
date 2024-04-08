import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markUpGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join("");

const ulEl = document.querySelector(".gallery");
ulEl.insertAdjacentHTML("afterbegin", markUpGalleryItems);

ulEl.addEventListener("click", (e) => {});
