// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const galleryCardsArr = galleryItems
  .map(
    el =>
      `<div >
        <a href="${el.original}">
            <img
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
            data-source="${el.original}"
            />
        </a>
    </div>`
  )
  .join('');

galleryList.innerHTML = galleryCardsArr;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
