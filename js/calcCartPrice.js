function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price')

    let totalPrice = 0;
    
    cartItems.forEach((item) => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = amountEl.innerText * priceEl.innerText;

        totalPrice += currentPrice;
    })
    totalPriceEl.innerText = totalPrice.toFixed(2);
}