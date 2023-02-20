import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper('.rooms-foto', {
    // Optional parameters
    direction: 'horizontal',
    //   direction: 'vertical',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: false, // что-бы сделать пагинацию кликабельной
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false
    },
    
    // // растояние между слайдами
    // spaceBetween: 16,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    // автовисота
    aytoHeight: true,

    // количество слайдов на странице
    // slidesPerView: 2,
    // Количество пролистиваемих слайдов
    slidesPerGroup: 1,
    // Слайд центр
    // centeredSlides: false, 
    // Свободний режим
    freeMode: true,
    // Автопрокрутка
    autoplay: {
        // Пауза
        delay: 2000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true
    },
    nested: true,
    speed: 1000,
    // Адаптив
    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
        },
    },
  });
  