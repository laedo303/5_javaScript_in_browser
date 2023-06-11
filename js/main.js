const swiper = document.querySelector('.swiper');
const showBtn = document.querySelector('.repair-brands__show-btn"');

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
      mySwiper.destroy(deleteInstance = true, cleanStyles = true);
    }
  };
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

