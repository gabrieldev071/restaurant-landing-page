// Seleciona os elementos
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');

// Adiciona evento de clique no botão
dropdownButton.addEventListener('click', () => {
  const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';

  // Alterna estado do botão e visibilidade da lista
  dropdownButton.setAttribute('aria-expanded', !isExpanded);
  dropdownList.classList.toggle('dropdown__list--visible', !isExpanded);
});
