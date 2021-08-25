const burger = document.querySelector('.header__adaptive-burger');
const header = document.querySelector('header');
burger.addEventListener('click', () => {
    header.classList.toggle('header__adaptive-active');
})