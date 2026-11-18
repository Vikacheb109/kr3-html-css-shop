function renderProducts() {
    const container = document.querySelector('.catalog-product-cards');

    products.forEach(function(product) {
        let card = document.createElement('div');
        card.classList.add('product-cards');
        card.dataset.id = product.id;

        let heart = document.createElement('button');

        heart.classList.add('favorite-button');
        heart.type = 'button';
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>';

        card.append(heart);


        let image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        let title = document.createElement('h3');
        title.textContent = product.name;

        let price = document.createElement('p');
        price.textContent = product.price + ' руб.';

        let button = document.createElement('button');
        button.classList.add('button', 'product-card__button');
        button.type = 'button';
        button.textContent = 'Заказать';

        card.append(image, title, price, button);
        container.append(card);

    });
}