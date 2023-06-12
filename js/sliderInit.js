
let mySwiper;
const slider = () => {
  const container = document.querySelector('.container');

  if (window.innerWidth < 768) {
    mySwiper = new Swiper('.slider-container', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };

  if (window.innerWidth >= 768 &&
    container.classList.contains('.swiper-initialized')) {
    mySwiper.destroy();
  };
}

slider();

window.addEventListener('resize', slider);
