let burgerOpen = document.querySelector('.open__button')
let burgerClose = document.querySelector('.close__button')
let menu = document.querySelector('.menu__burger')


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
            transition-duration: 1500ms;
        `
    }else{
        menu.style = `
            transform: translate(100%);
            transition-duration: 1500ms;
        `
    }
}, 100)

