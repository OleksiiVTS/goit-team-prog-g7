import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-maks', {
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

  // slidesPerView: 2,

  spaceBetween: 40,

  loop: false,

  autoplay: {
    delay: 2000,

    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 2,
    },
  },

  //   centeredSlides: true,
});

// const swiperr = new Swiper('.swiper-2', {
//   // Optional parameters
//   direction: 'horizontal',

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.right-btn-swiper',
//     prevEl: '.left-btn-swiper',
//   },

//   slidesPerView: 1.5,

//   spaceBetween: 20,

//   loop: false,

//   centeredSlides: true,
// });
