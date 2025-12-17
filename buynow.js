 const modal = document.getElementById('item-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalPrice = document.getElementById('modal-price');
    const modalDiscount = document.getElementById('modal-discount');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = card.querySelector('img').src;
            modalName.textContent = card.querySelector('.product-name').textContent;
            modalPrice.textContent = card.querySelector('.price-tag').textContent;
            modalDiscount.textContent = card.querySelector('.discount').textContent;
            modalDiscount.style.textDecoration = "line-through";
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }