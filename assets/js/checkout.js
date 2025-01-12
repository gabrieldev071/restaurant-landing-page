const cartButton = document.querySelectorAll('.card__button');
let cartCount = 0;

cartButton.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.fa-shopping-cart').setAttribute('data-count', cartCount);
  });
});
