const faq = document.querySelectorAll('.faq__list-item');
const header = document.querySelector('header');
const burgerBtn = document.querySelector('.hamburglar');
const navbar = document.querySelector('.navbar');
const heroArrow = document.querySelector('.hero__arrow');
const subMenuMobile = document.querySelectorAll('.submenu__mobile');
const navbarBackground = document.querySelector('.navbar-background');
const video = document.querySelector('#specialty-video');

const hero = document.querySelector('.hero');



document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    // bg
    (function setHeroBg() {
        let dateNow = new Date();
        let getMonth = dateNow.getMonth() + 1;
        
        try
        {
            if (getMonth >= 3 && getMonth <= 8) {
                hero.style.backgroundImage = "url('./assets/img/hero-bg-leto.webp')";
            } else {
                hero.style.backgroundImage = "url('./assets/img/hero-bg-zim.webp')";
            }
        } catch (e) {
            return e;
        }
    })();
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
            navbarBackground.classList.toggle('navbar-background--active')
        } else {
            navbarBackground.classList.toggle('navbar-background--active')
            burgerBtn.classList.toggle('is-open')
            navbar.classList.toggle('navbar--open')
            navbarBackground.addEventListener('click', () => {
                if (burgerBtn.classList.contains('is-open')) {
                    burgerBtn.classList.add('is-closed')
                    navbar.classList.remove('navbar--open')
                    navbarBackground.classList.remove('navbar-background--active')
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
    try {
        video.volume = .2;
    } catch (e) {
        return e
    }

    // bg time
})

