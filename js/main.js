renderProducts();
initOrderForm();
initProductDetails();

const searchInput = document.querySelector('#search-input');
const categoryFilter = document.querySelector('#category-filter');
const sortSelect = document.querySelector('#sort-select');

searchInput.addEventListener('input', filterCards);
categoryFilter.addEventListener('change', filterCards);

sortSelect.addEventListener('change', sortCards);