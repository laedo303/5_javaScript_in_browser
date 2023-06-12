const showBtn = document.querySelector('.repair-brands__show-btn');
const brandsList = document.querySelector('.brands-list');
const doubleArrow = document.querySelector('.double-arrow');
const showMore = document.querySelector('.show-more');


showBtn.addEventListener('click', () => {
  if (brandsList.style.maxHeight === '100%') {
    brandsList.style.maxHeight = '200px';
    doubleArrow.style.transform = '';
    showMore.textContent = 'Показать все';
  } else {
    brandsList.style.maxHeight = '100%';
    doubleArrow.style.transform = 'rotate(180deg)';
    showMore.textContent = 'Скрыть';
  }
});