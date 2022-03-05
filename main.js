const faq = document.querySelectorAll('.faq__list-item');
const header = document.querySelector('header');
const burgerBtn = document.querySelector('.hamburglar');
const navbar = document.querySelector('.navbar');
const heroArrow = document.querySelector('.hero__arrow');
const subMenuMobile = document.querySelectorAll('.submenu__mobile');



new WOW().init();
[...faq].map(item => item.addEventListener('click', () => {
    item.classList.toggle('faq__list-item--active')
}))

window.addEventListener('scroll', () => {
    let y = window.pageYOffset;
    y > 150 ? header.classList.add('scroll') : header.classList.remove('scroll')
    y > 300 ? heroArrow.classList.add('hero__arrow--hidden') : heroArrow.classList.remove('hero__arrow--hidden')
})

heroArrow.addEventListener('click', () => {
    const headerHight = header.offsetHeight;
    const sectionOffset = document.querySelector('section').offsetHeight;
    window.scrollBy({
        top: sectionOffset - headerHight,
        behavior: 'smooth'
    })
})

burgerBtn.addEventListener('click', () => {
    if (burgerBtn.classList.contains('is-open')) {
        burgerBtn.classList.toggle('is-closed')
        navbar.classList.toggle('navbar--open')
    } else {
        burgerBtn.classList.toggle('is-open')
        navbar.classList.toggle('navbar--open')
    }
});

[...subMenuMobile].map(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('submenu__mobile--active')
    })
})
