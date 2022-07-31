import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const [menu, setMenu] = useState('closed');

    const showNavigation = () => {
        const menuClosed = document.querySelector('#menu-closed');
        const menuOpened = document.querySelector('#menu-opened');
        const navbarItems = document.querySelector('#navbar-items');

        if (menu === "closed") {
            menuClosed.classList.add('hidden');
            menuOpened.classList.remove('hidden');
            navbarItems.classList.replace('h-0', 'h-44');  
            setMenu('open');
        } else {
            menuClosed.classList.remove('hidden');
            menuOpened.classList.add('hidden');
            navbarItems.classList.replace('h-44', 'h-0');
            setMenu('closed');
        }
    };  
    
  return (
    <div>
        {/* Navbar */}
        <nav className="container mx-auto flex flex-wrap justify-between items-center px-5 text-white">
            {/* Navbar Logo */}
            <div className="h-16 flex items-center">
                <a href="/"><h1 className="text-3xl font-extralight">Richard Guarnieri</h1></a>
            </div>
            {/* Navbar Menu Button */}
            <button id="menu-btn" className="p-1 rounded hover:bg-gray-700 focus:ring-2 focus:ring-white md:hidden"
            onClick={showNavigation}>
                <svg id="menu-closed" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg id="menu-opened" xmlns="http://www.w3.org/2000/svg" className="hidden h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {/* Navbar Menu Items */}
            <div id="navbar-items" className="basis-full overflow-hidden h-0 transition-all duration-300
                md:h-auto md:basis-auto">
                <ul className="flex flex-col mb-3 text-center md:flex-row md:mb-0 md:space-x-9 md:space-y-0">
                    <li><HashLink smooth to="/" className="p-1 block rounded transition hover:text-sky-500 hover:bg-slate-50 md:hover:bg-inherit">Home</HashLink></li>
                    <li><HashLink smooth to="/#portfolio" className="p-1 block rounded transition hover:text-sky-500 hover:bg-gray-100 md:hover:bg-inherit">Portfolio</HashLink></li>
                    <li><HashLink smooth to="/#about" className="p-1 block rounded transition hover:text-sky-500 hover:bg-gray-100 md:hover:bg-inherit">About</HashLink></li>
                    <li><HashLink to="/blog" className="p-1 block rounded transition hover:text-sky-500 hover:bg-gray-100 md:hover:bg-inherit">Blog</HashLink></li>
                    <li><HashLink smooth to="/#contact" className="p-1 block rounded transition hover:text-sky-500 hover:bg-gray-100 md:hover:bg-inherit">Contact</HashLink></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar