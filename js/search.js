const input = document.querySelector('.input')
const cards = document.querySelectorAll('.card-title')

input.oninput = function() {
    let value = this.value.trim()
    if(value.length > 0) {
        cards.forEach(card => {
            if(card.innerText.toLowerCase().search(value) == -1) {
                card.closest('.col-sm-10').classList.add('hide')
            }  
        })
    } else {
        cards.forEach(card => {
            card.closest('.col-sm-10').classList.remove('hide')         
        })
    }
}


