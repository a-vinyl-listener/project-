const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
  },
  mousewheel: {
      sensitivity: true,
  },

  slidesPerGroup: 3,

  breakpoints: {
    1200: {
        slidesPerView: 3,
        spaceBetween: 28
    },
    991: {
        slidesPerView: 2,
        spaceBetween: 1
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 1
    },
    575: {
        slidesPerView: 1,
    },
   
  }
});
