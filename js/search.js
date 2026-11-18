function filterCards() {
    let searchText = document.querySelector('#search-input').value.toLowerCase().trim();
    let category = document.querySelector('#category-filter').value;

    let cards = document.querySelectorAll('.product-cards'); //nodeList

    let emptyMessage = document.querySelector('.catalog-empty');
    let count = 0;

    cards.forEach(function(card) {
        let id = Number(card.dataset.id);
        let product = products.find(function(item) {
            return item.id === id;
        });

        let matchesSearch = product.name.toLowerCase().includes(searchText);
        let matchesCategory = (category === 'all' || product.category === category);

        if (matchesSearch && matchesCategory) {
            card.style.display = ''; //установленное у дисплея значение убирает
            count++;
        } else {
            card.style.display = 'none';
        }

        if (count == 0) {
            emptyMessage.hidden = false;
        } else {
            emptyMessage.hidden = true;
        }

    });
}