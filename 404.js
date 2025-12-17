// Select all category items
    const categories = document.querySelectorAll('.categories.item');

    // Loop through each category and add a click event
    categories.forEach(category => {
        category.addEventListener('click', () => {
            window.location.href = '404.html'; // Redirect to 404 page
        });
    });