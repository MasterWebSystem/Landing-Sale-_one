const burger = document.querySelector('#burgerMenu')
const nav = document.querySelector('#nav')
const overlay = document.querySelector('#overlay')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    if (nav.classList.contains('close')) {
        nav.classList.remove('close')
        nav.classList.add('open')
        burger.style.position = 'fixed'
        
        overlay.style.display = 'block'

        body.style.overflow = 'hidden'
        return
    }

    if (nav.classList.contains('open')) {
        nav.classList.remove('open')
        nav.classList.add('close')
        burger.style.position = 'relative'
        
        overlay.style.display = 'none'

        body.style.overflow = 'scroll'
    }
})