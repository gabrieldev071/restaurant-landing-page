const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');

dropdownButton.addEventListener('click', () => {
  const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
  
  // Alterna o estado do botão e a visibilidade da lista
  dropdownButton.setAttribute('aria-expanded', !isExpanded);
  dropdownList.classList.toggle('dropdown__list--visible', !isExpanded);
});
