function initProductDetails() {

    let container = document.querySelector('.catalog-product-cards');

    let dialog = document.querySelector('.product-dialog');
    let closeButton = document.querySelector('.product-dialog__close');

    let detailImage = document.querySelector('.detail-image');
    let detailName = document.querySelector('.detail-name');
    let detailDescription = document.querySelector('.detail-description');
    let detailPrice = document.querySelector('.detail-price');
    let detailStars = document.querySelector('.detail-stars');
    let detailRating = document.querySelector('.detail-rating');
    let detailStock = document.querySelector('.detail-stock');
    let detailOrderButton = document.querySelector('.detail-order-button');


    let favorites = new Set();

    function updateHeart(button, id) {
        let isFavorite = favorites.has(id);
        button.innerHTML = isFavorite ? `<i class="fa-solid fa-heart"></i>` : `<i class="fa-regular fa-heart"></i>`;
        button.classList.toggle('active', isFavorite);
    }
    container.querySelectorAll('.product-cards').forEach(function(card) {
        let id = Number(card.dataset.id);
        let heart = card.querySelector('.favorite-button');
        updateHeart(heart, id);
    });




    let currentProduct = null;

    function openProduct(id) {
        let product = products.find(function(item) {
            return item.id === id;
        });
        currentProduct = product;

        detailImage.src = product.image;
        detailImage.alt = product.name;

        detailName.textContent = product.name;

        detailDescription.textContent = product.description || 'Описания пока нет';
        detailPrice.textContent = product.price + ' руб.';

        let rating = product.rating || 0;
        let filledStars = Math.round(rating);

        detailStars.textContent = '★'.repeat(filledStars) + '☆'.repeat(5 - filledStars);
        detailRating.textContent = rating + ' / 5';
        detailStock.textContent = (product.inStock === false ? 'Нет в наличии' : 'В наличии');

        dialog.showModal();
    }

    container.addEventListener('click', function(event) {
        let card = event.target.closest('.product-cards');
        if (!card) {
            return;
        }

        let id = Number(card.dataset.id);
        let heart = event.target.closest('.favorite-button');

        if (heart) {
            if (favorites.has(id)) {
                favorites.delete(id);
            } else {
                favorites.add(id);
            }
            updateHeart(heart, id);
            return;
        }
        if (event.target.closest('.product-card__button')) {
            return;
        }

        openProduct(id);
    });

    closeButton.addEventListener('click', function() {
        dialog.close();
    });


    detailOrderButton.addEventListener('click', function() {
        let orderDialog = document.querySelector('#order-dialog');
        let selectedProduct = document.querySelector('#selected-product');

        let message = document.querySelector('.form-message');

        if (message) {
            message.textContent = '';
        }

        dialog.close();
        orderDialog.showModal();
    });
}