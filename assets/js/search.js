document.querySelector('#search').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const items = document.querySelectorAll('.card');
  
    items.forEach((item) => {
      const title = item.querySelector('.card__title').textContent.toLowerCase();
      const description = item.querySelector('.card__description').textContent.toLowerCase();
  
      if (title.includes(searchQuery) || description.includes(searchQuery)) {
        item.style.display = ''; // Mostra o item
      } else {
        item.style.display = 'none'; // Esconde o item
      }
    });
  });
  