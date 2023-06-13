let mySwiper;

const slider = () => {
  const container = document.querySelector('.container');
  const brandsList = document.querySelector('.brands-list');
  const brandsItem = document.querySelectorAll('.brands-item');

  if (window.innerWidth < 768) {
    container.classList.add('slider-container');
    brandsList.classList.add('swiper-wrapper');
    brandsItem.forEach(elem => {
      elem.classList.add('swiper-slide');
    });

    mySwiper = new Swiper('.slider-container', {
      width: 240,
      effect: "slide",
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
      },
    });
  };

  if (window.innerWidth >= 768 && container.classList.contains('.swiper-initialized')) {
    mySwiper.destroy();

    container.classList.remove('slider-container', 'swiper-initialized');
    brandsList.classList.remove('swiper-wrapper');
    brandsItem.forEach(elem, () => {
      elem.classList.remove('swiper-slide');
    });
  };
}

window.addEventListener('resize', slider);
slider();
