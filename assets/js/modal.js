// Seletores
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = []; // Array para armazenar itens no carrinho

// Função para abrir a modal
function openCartModal() {
  cartModal.style.display = 'flex';
}

// Função para fechar a modal
function closeModal() {
  cartModal.style.display = 'none';
}

// Função para atualizar o carrinho
function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-modal__item');
    li.innerHTML = `
      <span class="cart-modal__item-name">${item.name}</span>
      <span class="cart-modal__item-quantity">x${item.quantity}</span>
      <div class="cart-modal__item-actions">
        <button onclick="changeQuantity(${index}, 1)">+</button>
        <button onclick="changeQuantity(${index}, -1)">-</button>
        <button onclick="removeItem(${index})">Remover</button>
      </div>
    `;
    cartItemsList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Função para adicionar item ao carrinho
function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  updateCart();
  openCartModal();
}

// Função para alterar a quantidade de itens
function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}

// Função para remover item do carrinho
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Eventos
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    addToCart(id, name, price);
  });
});

closeCartModal.addEventListener('click', closeModal);
