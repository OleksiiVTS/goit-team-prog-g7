//import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   //   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true, // что-бы сделать пагинацию кликабельной
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    // что-бы сделать пагинацию кликабельной
  },

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.room-arrow-next',
    prevEl: '.room-arrow-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
    
  },
  simulateTouch: true,
    grabCursor: true,
    slideToClickedSlide: true,
    
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

   autoplay: {
    delay: 3000,

   },

   speed: 800,

   effect: 'cube',

   cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOfFset: 20,
    shadowScale: 0.94
   },

});

