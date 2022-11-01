function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]')
    const numberOfItems = document.querySelector('.count')

    if(cartWrapper.children.length > 0) {
        cartEmpty.classList.add('d-none')
        numberOfItems.innerHTML = `${cartWrapper.children.length}`
    } else {
        cartEmpty.classList.remove('d-none')
        numberOfItems.innerHTML = ``
    }
}