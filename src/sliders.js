import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.right-btn-swiper',
    prevEl: '.left-btn-swiper',
  },

  slidesPerView: 3,

  spaceBetween: 40,

  loop: false,
  //   centeredSlides: true,
});

const swiperr = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.right-btn-swiper',
    prevEl: '.left-btn-swiper',
  },

  slidesPerView: 1.5,

  spaceBetween: 20,

  loop: false,

  centeredSlides: true,
});
