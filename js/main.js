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

  if (window.innerWidth >= 768) {
    if (swiper.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  };
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})