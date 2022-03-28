const faq = document.querySelectorAll('.faq__list-item');
const header = document.querySelector('header');
const burgerBtn = document.querySelector('.hamburglar');
const navbar = document.querySelector('.navbar');
const heroArrow = document.querySelector('.hero__arrow');
const subMenuMobile = document.querySelectorAll('.submenu__mobile');
const main = document.querySelector('main');
const video = document.querySelector('#specialty-video');

document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    // faq //
    faq.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle('faq__list-item--active')
    }))
    
    // header
    window.addEventListener('scroll', () => {
        let y = window.pageYOffset;
        y > 150 ? header.classList.add('scroll') : header.classList.remove('scroll')
        y > 300 ? heroArrow.classList.add('hero__arrow--hidden') : heroArrow.classList.remove('hero__arrow--hidden')
    })
    
    // hero arrow
    heroArrow.addEventListener('click', () => {
        const headerHight = header.offsetHeight;
        const sectionOffset = document.querySelector('section').offsetHeight;
        window.scrollBy({
            top: sectionOffset - headerHight,
            behavior: 'smooth'
        })
    })
    
    // burger
    burgerBtn.addEventListener('click', () => {
        if (burgerBtn.classList.contains('is-open')) {
            burgerBtn.classList.toggle('is-closed')
            navbar.classList.toggle('navbar--open')
            main.classList.toggle('main--aside-active')
        } else {
            main.classList.toggle('main--aside-active')
            burgerBtn.classList.toggle('is-open')
            navbar.classList.toggle('navbar--open')
            main.addEventListener('click', () => {
                if (burgerBtn.classList.contains('is-open')) {
                    burgerBtn.classList.add('is-closed')
                    navbar.classList.remove('navbar--open')
                    main.classList.remove('main--aside-active')
                }
            })
        }
    });
    
    // sub menu
    subMenuMobile.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('submenu__mobile--active')
        })
    })

    // video
    video.volume = .1;
})