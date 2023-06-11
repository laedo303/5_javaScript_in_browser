const swiper = document.querySelector('.swiper');

let mySwiper;

const mobileSlider = () => {
  if (window.innerWidth < 768) {
    mySwiper = new Swiper(swiper, {
      slidesPerview: 1,
      spaceBetween: 16,
      slideClass: 'brands-item',
      loop: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  };
};

mobileSlider();
