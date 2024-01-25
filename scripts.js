const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const mainNav = document?.querySelector('main-nav');

const header = document.querySelector('.main-nav');
const descr = document.querySelector('.page-descr');
const headerHeight = header.offsetHeight;
const descrHeight = descr.offsetHeight;
let lastScrollTop = 0;




burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--active');
    
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--active');
    })
});

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY;

//     if (scrollDistance > lastScrollTop) {
//         header.classList.remove('header--fixed');
//         first.style.marginTop = null;
//     } else {
//         header.classList.add('header--fixed');
//         first.style.marginTop = '${headerHeight}px';
        
//     }

//     if (scrollDistance === 0) {
//         header.classList.remove('header--fixed');
//         first.style.marginTop = null;
//     }

//     lastScrollTop = scrollDistance;
   
// });