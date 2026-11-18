function initOrderForm() {
    const dialog = document.querySelector('.order-dialog');
    const form = document.querySelector('.order-form');
    const message = document.querySelector('.form-message');
    const closeButton = document.querySelector('.close-order-dialog');


    document.querySelectorAll('.product-card__button').forEach(function(button) {

        button.addEventListener('click', function() {

            let card = button.closest('.product-cards');
            let productName = card.querySelector('h3').textContent;

            document.querySelector('#selected-product').value = productName;

            message.textContent = ''; //очистка сообщения о валидности ввода
            dialog.showModal();

        });

    });

    closeButton.addEventListener('click', function() {
        dialog.close();
    });

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        let name = document.querySelector('#order-name').value.trim();
        let email = document.querySelector('#order-email').value.trim();
        let phone = document.querySelector('#order-phone').value.trim();
        let agreement = document.querySelector('#order-agreement').checked;

        message.style.color = 'red';

        if (name.length < 2) {
            message.textContent = 'Введите имя (минимум 2 символа)';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            message.textContent = 'Пожалуйста, введите корректный email';
            return;
        }

        if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
            message.textContent = 'Телефон должен быть в формате +7 (999) 123-45-67';
            return;
        }

        if (!agreement) {
            message.textContent = 'Необходимо согласиться на обработку данных';
            return;
        }

        message.style.color = 'green';
        message.textContent = 'Спасибо! Ваша заявка успешно оформлена.';

        form.reset(); //после оформления идет очистка формы

    });
}