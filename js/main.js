const showBtn = document.querySelector('.repair-brands__show-btn');
const brandsList = document.querySelector('.brands-list');
const doubleArrow = document.querySelector('.double-arrow');
const showMore = document.querySelector('.show-more');


showBtn.addEventListener('click', () => {
  if (brandsList.style.height === '100%') {
    brandsList.style.height = '200px';
    doubleArrow.style.transform = '';
    showMore.textContent = 'Показать все';
  } else {
    brandsList.style.height = '100%';
    doubleArrow.style.transform = 'rotate(180deg)';
    showMore.textContent = 'Скрыть';
  }
});