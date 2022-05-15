// const portfolioHeaderElement = document.querySelector('#portfolio-header')
// const aboutHeaderElement = document.querySelector('#about-header')
// const contactHeaderElement = document.querySelector('#contact-header')

// const portfolioTitleElement = document.querySelector('#portfolio-title')
// const aboutTitleElement = document.querySelector('#about-title')
// const contactTitleElement = document.querySelector('#contact-title')


// // portfolioTitleElement.addEventListener('click', () => {
// //     let pElement = document.createElement('p')
// //     pElement.innerHTML = 'Lorem Ipsum'
// //     portfolioTitleElement.parentElement.append(pElement);
// // })

// // removeEventListener

// window.addEventListener('scroll', () => {
//     console.log(window.pageYOffset + 'px');
//     console.log(portfolioHeaderElement.getBoundingClientRect())
//     let portfolioTop = portfolioHeaderElement.getBoundingClientRect().top
//     let aboutTop = aboutHeaderElement.getBoundingClientRect().top
//     let contactTop = contactHeaderElement.getBoundingClientRect().top
//     if (portfolioTop < 25 && portfolioTop > -40) {
//         portfolioHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
//         portfolioHeaderElement.classList.remove("border-b")
//         portfolioTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     } else {
//         portfolioHeaderElement.classList.remove("bg-slate-900", "text-white")
//         portfolioHeaderElement.classList.add("border-b")
//         portfolioTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     }
//     if (aboutTop < 25 && aboutTop > -40) {
//         aboutHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
//         aboutHeaderElement.classList.remove("border-b")
//         aboutTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     } else {
//         aboutHeaderElement.classList.remove("bg-slate-900", "text-white")
//         aboutHeaderElement.classList.add("border-b")
//         aboutTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     }
//     if (contactTop < 25 && contactTop > -40) {
//         contactHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
//         contactHeaderElement.classList.remove("border-b")
//         contactTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     } else {
//         contactHeaderElement.classList.remove("bg-slate-900", "text-white")
//         contactHeaderElement.classList.add("border-b")
//         contactTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
//     }
// });

// // const convertRemToPixels = (rem) => {    
// //     return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
// // }

// const topHamburgerLine = document.querySelector('#top-hamburger-line');
// const middleHamburgerLine = document.querySelector('#middle-hamburger-line');
// const bottomHamburgerLine = document.querySelector('#bottom-hamburger-line');


// console.log(menuBtn.children[0])


const menuBtn = document.querySelector('#menu-btn');
const menuClosed = document.querySelector('#menu-closed');
const menuOpened = document.querySelector('#menu-opened');
const navbarItems = document.querySelector('#navbar-items');

// menuBtn.classList.add('hamburger-inactive')

const showNavigation = () => {
    if (menuOpened.classList.contains('hidden')) {
        menuClosed.classList.add('hidden');
        menuOpened.classList.remove('hidden');
        // menuBtn.classList.replace('hamburger-inactive', 'hamburger-active')
        // menuBtn.children[0].classList.add('origin-top-left', 'translate-x-1', 'rotate-[40deg]')
        // menuBtn.children[1].classList.add('invisible')
        // menuBtn.children[2].classList.add('origin-bottom-left', 'translate-x-1', '-rotate-[40deg]')
        navbarItems.classList.remove('hidden');
        // navbarItems.classList.add('transition-opacity', 'ease-in', 'duration-300', 'z-10', 'opacity-100');    
    } else {
        menuClosed.classList.remove('hidden');
        menuOpened.classList.add('hidden');
        // menuBtn.classList.replace('hamburger-inactive', 'hamburger-active')
        // menuBtn.children[0].classList.add('origin-top-left', 'translate-x-1', 'rotate-[40deg]')
        // menuBtn.children[1].classList.add('invisible')
        // menuBtn.children[2].classList.add('origin-bottom-left', 'translate-x-1', '-rotate-[40deg]')
        navbarItems.classList.add('hidden');
        // menuBtn.classList.replace('hamburger-active', 'hamburger-inactive')
        // menuBtn.children[0].classList.remove('origin-top-left', 'translate-x-1', 'rotate-[40deg]')
        // menuBtn.children[1].classList.remove('invisible')
        // menuBtn.children[2].classList.remove('origin-bottom-left', 'translate-x-1', '-rotate-[40deg]')
        // navbarItems.classList.add('hidden');
        // navbarItems.classList.remove('transition-opacity', 'ease-in', 'duration-300', 'z-10', 'opacity-100');    
    }
};

menuBtn.addEventListener('click', showNavigation)



const carouselBox = document.querySelector('#carousel-box');
let scrollPerClick;
let imagePadding = 20;
let scrollAmount = 0;

// console.log(carouselBox.children[0]);
// console.log(carouselBox.children[0].clientWidth);
// console.log(carouselBox.scrollWidth);
// console.log(carouselBox.clientWidth);

// Gets the "li" element width and adds a bit of arbitrary padding
scrollPerClick = carouselBox.children[0].clientWidth + imagePadding;

const scrollLeft = () => {
    carouselBox.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
};

const scrollRight = () => {
    if (scrollAmount <= carouselBox.scrollWidth - carouselBox.clientWidth) {
        carouselBox.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    };
};

const carouselLeftBtn = document.querySelector('#carousel-left-btn');
const carouselRightBtn = document.querySelector('#carousel-right-btn');

carouselLeftBtn.addEventListener('click', scrollLeft);
carouselRightBtn.addEventListener('click', scrollRight);