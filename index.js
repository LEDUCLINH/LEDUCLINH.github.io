const button = document.querySelector('#navbar');
const menu = document.querySelector('.menu');
const close = document.querySelector('#close');
const closeX = document.querySelector('#close_X');
const closes = [close, closeX];
let check = false;
button.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.add("toggle__menu");
    button.style.display = 'none';
})

closes.forEach(close => close.addEventListener('click', function() {
           menu.classList.remove("toggle__menu")
            button.style.display = "block"; 
}))