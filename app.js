const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Элементы
const ulEl = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const overleyEl = document.querySelector('.lightbox__overlay');
const modalImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
let currentIndex;


// --1--
createGallery(galleryItems);
function createGallery(items) {
  const markup = items.map((item, idx) =>
    `
    <li class="gallery__item">
      <a class="gallery__link"
      href="${item.original}"
      >
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          data-index="${idx}"
          alt="${item.description}"
        />
      </a>
   </li>
    `
  ).join('');
  ulEl.innerHTML = markup
};


// --2--
ulEl.addEventListener('click', onPictureClick);
function onPictureClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  
  modal.classList.add('is-open');
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
  currentIndex = Number(evt.target.dataset.index);
  document.addEventListener('keydown', changeImgOnClick);
};


// --3--
closeModalBtn.addEventListener('click', closeModal);
overleyEl.addEventListener('click', closeModal);

function changeImgOnClick(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  } else if (evt.code === 'ArrowRight') {
    onRight();
  } else if (evt.code === 'ArrowLeft') {
    onLeft();
  };
};

function closeModal() {
  modal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
  document.removeEventListener('keydown', changeImgOnClick);
};

function onRight() { 
  if (currentIndex + 1 > galleryItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  } changeImg()
}

function onLeft() {
  if (currentIndex - 1 < 0) {
    currentIndex = galleryItems.length - 1;
  } else {
    currentIndex -= 1;
  } changeImg()
}

function changeImg() {
  modalImg.src = galleryItems[currentIndex].original;
  modalImg.alt = galleryItems[currentIndex].description;
}