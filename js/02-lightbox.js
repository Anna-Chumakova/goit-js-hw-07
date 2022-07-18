import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");


const galleryList = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join(" ");
galleryRef.insertAdjacentHTML("beforeend", galleryList);

  new SimpleLightbox(".gallery a", {
      captionsType: "alt",
      captionsData: "alt",
      captionsPosition: "bottom",
      captionDelay: 250,
});