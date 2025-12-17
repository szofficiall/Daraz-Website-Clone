 const searchInput = document.querySelector('.search');
  const productCards = document.querySelectorAll('.item-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const productName = card.querySelector('.product-name').textContent.toLowerCase();
      if (productName.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });