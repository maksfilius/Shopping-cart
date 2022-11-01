const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event) {

    if(event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card')
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-img-top').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if(itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]')
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter)
        } else {
        
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__details">
                                                <div class="items--small counter-wrapper">
                                                    <div class="items text-center">
                                                        <div class="items_control" data-action="minus">-</div>
                                                        <div class="items_current" data-counter>${productInfo.counter}</div>
                                                        <div class="items_control" data-action="plus">+</div>
                                                    </div>
                                                </div>

                                                <div class="price d-flex justify-content-center">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                    <span class="dollar">$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        card.querySelector('[data-counter]').innerText = '1';

        toggleCartStatus();

        calcCartPrice();
    }
})