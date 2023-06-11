const swiper = document.querySelector('.swiper');
const brandsList = document.querySelector('.brands-list');
const showBtn = document.querySelector('.repair-brands__show-btn');
const doubleArrow = document.querySelector('.double-arrow');
const showMore = document.querySelector('.show-more');

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
});

showBtn.addEventListener('click', () => {
  if (brandsList.style.maxHeight === '100%') {
    brandsList.style.maxHeight = '150px';
    doubleArrow.style.transform = '';
    showMore.textContent = 'Показать все';
  } else {
    brandsList.style.maxHeight = '100%';
    doubleArrow.style.transform = 'rotate(180deg)';
    showMore.textContent = 'Скрыть';
  }
});