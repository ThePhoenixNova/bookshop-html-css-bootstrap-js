// cart.js
$(document).ready(function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const taxRate = 0.1;

    function updateCart() {
        const $cartItems = $('#cart-items');
        $cartItems.empty();

        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            $cartItems.append(`
                <div class="card mb-3 cart-item">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-2 mb-2 mb-md-0">
                                <img src="${item.image}" alt="${item.title}" class="img-fluid rounded">
                            </div>
                            <div class="col-md-4 mb-2 mb-md-0">
                                <h5 class="cart-item-title">${item.title}</h5>
                            </div>
                            <div class="col-md-2 mb-2 mb-md-0">
                                <span class="cart-item-price fw-bold">$${item.price.toFixed(2)}</span>
                            </div>
                            <div class="col-md-2 mb-2 mb-md-0">
                                <input type="number" class="form-control cart-item-quantity" value="${item.quantity}" min="1" data-index="${index}">
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-danger btn-sm remove-item" data-index="${index}"><i class="fas fa-trash-alt"></i> Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });

        const tax = subtotal * taxRate;
        const total = subtotal + tax;

        $('#cart-subtotal').text(`$${subtotal.toFixed(2)}`);
        $('#cart-tax').text(`$${tax.toFixed(2)}`);
        $('#cart-total').text(`$${total.toFixed(2)}`);
        $('#cart-count').text(cart.length);

        localStorage.setItem('cart', JSON.stringify(cart));

        if (cart.length === 0) {
            $cartItems.append('<p class="text-center">Your cart is empty.</p>');
            $('#checkout-btn').prop('disabled', true);
        } else {
            $('#checkout-btn').prop('disabled', false);
        }
    }

    updateCart();

    $(document).on('change', '.cart-item-quantity', function() {
        const index = $(this).data('index');
        const newQuantity = parseInt($(this).val());
        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
            updateCart();
        }
    });

    $(document).on('click', '.remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        updateCart();
    });

    $('#checkout-btn').click(function() {
        if (cart.length > 0) {
            alert('Thank you for your purchase! This is where you would normally be redirected to a payment gateway.');
            cart = [];
            updateCart();
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    });
});