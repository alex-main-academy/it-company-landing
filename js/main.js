const burgerOpen = document.querySelector('.open__button')
const burgerClose = document.querySelector('.close__button')
const menu = document.querySelector('.menu__burger')
const body = document.querySelector('body')


let toggle = false;

burgerOpen.addEventListener('click', () => {
    toggle = !toggle;
})
burgerClose.addEventListener('click', () => {
    toggle = !toggle;
})


setInterval(() => {
    if (toggle == true) {
        menu.style = `
            transform: translate(0);
            transition-duration: 1000ms;
        `;
        body.style = `
            overflow: hidden;
        `
    }else{
        menu.style = `
            transform: translate(100%);
            transition-duration: 1000ms;
        `;
        body.style = `
            overflow: visible;
        `
    }
}, 100)

