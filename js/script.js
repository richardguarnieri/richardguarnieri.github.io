const portfolioHeaderElement = document.querySelector('#portfolio-header')
const aboutHeaderElement = document.querySelector('#about-header')
const contactHeaderElement = document.querySelector('#contact-header')

const portfolioTitleElement = document.querySelector('#portfolio-title')
const aboutTitleElement = document.querySelector('#about-title')
const contactTitleElement = document.querySelector('#contact-title')


// portfolioTitleElement.addEventListener('click', () => {
//     let pElement = document.createElement('p')
//     pElement.innerHTML = 'Lorem Ipsum'
//     portfolioTitleElement.parentElement.append(pElement);
// })

// removeEventListener

window.alert('Responsive version of this site is in active development! Expected to be finalized by end of May\n\nCurrenly best seen in screens about 1600 width')

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset + 'px');
    console.log(portfolioHeaderElement.getBoundingClientRect())
    let portfolioTop = portfolioHeaderElement.getBoundingClientRect().top
    let aboutTop = aboutHeaderElement.getBoundingClientRect().top
    let contactTop = contactHeaderElement.getBoundingClientRect().top
    if (portfolioTop < 25 && portfolioTop > -40) {
        portfolioHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
        portfolioHeaderElement.classList.remove("border-b")
        portfolioTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    } else {
        portfolioHeaderElement.classList.remove("bg-slate-900", "text-white")
        portfolioHeaderElement.classList.add("border-b")
        portfolioTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    }
    if (aboutTop < 25 && aboutTop > -40) {
        aboutHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
        aboutHeaderElement.classList.remove("border-b")
        aboutTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    } else {
        aboutHeaderElement.classList.remove("bg-slate-900", "text-white")
        aboutHeaderElement.classList.add("border-b")
        aboutTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    }
    if (contactTop < 25 && contactTop > -40) {
        contactHeaderElement.classList.add("transition-all", "duration-300", "bg-slate-900", "text-white")
        contactHeaderElement.classList.remove("border-b")
        contactTitleElement.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    } else {
        contactHeaderElement.classList.remove("bg-slate-900", "text-white")
        contactHeaderElement.classList.add("border-b")
        contactTitleElement.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-slate-900", "to-sky-800")
    }
});

// const convertRemToPixels = (rem) => {    
//     return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
// }