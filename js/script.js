const portfolioElement = document.querySelector('#portfolio')
const portfolioTitleElement = document.querySelector('#portfolio-title')

console.log(portfolioElement)

portfolioTitleElement.addEventListener('click', () => {
    let pElement = document.createElement('p')
    pElement.innerHTML = 'Lorem Ipsum'
    portfolioTitleElement.parentElement.append(pElement);
})

// removeEventListener