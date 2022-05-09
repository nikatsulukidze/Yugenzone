// get elements from the DOM

const menu = document.querySelector('.menu');
const menubtn = document.querySelector('.menu-btn');



// toggle open/close menu

menubtn.addEventListener ('click', () => {
    menu.classList.toggle('menu-open');
});


