function sortCards() {
    let sortType = document.querySelector('#sort-select').value;
    let container = document.querySelector('.catalog-product-cards');

    let cards = Array.from(container.querySelectorAll('.product-cards')); //для метода sort

    cards.sort(function(cardA, cardB) {

        let productA = products.find(function(item) {
            return item.id === Number(cardA.dataset.id);
        });
        let productB = products.find(function(item) {
            return item.id === Number(cardB.dataset.id);
        });

        if (sortType === 'price-asc') {
            return productA.price - productB.price;
        }
        if (sortType === 'price-desc') {
            return productB.price - productA.price;
        }

        return productA.id - productB.id;
    });

    cards.forEach(function(card) {
        container.append(card);
    });
}