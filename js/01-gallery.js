import { galleryItems } from './gallery-items.js';

//import * as basicLightbox from './basiclightbox'
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onMakeBiggestImage);
//window.addEventListener("keydown", onCloseModal)
const galleryList = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`
}).join(" ");

galleryEl.insertAdjacentHTML("beforeend", galleryList);




function onMakeBiggestImage(evt, e) {
    evt.preventDefault();
    
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
    instance.show() 

   // if(e.code === "Escape") {
    //   instance.close()
    //   }
}

//function onCloseModal (evt) { if (evt.code === "Escape") {
//        instance.close()
//        }}
