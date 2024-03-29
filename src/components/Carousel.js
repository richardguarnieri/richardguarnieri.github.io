import codeQuiz from '../img/portfolio/code-quiz.png';
import eCommerceBackEnd from '../img/portfolio/e-commerce-back-end.png';
import employeeTracker from '../img/portfolio/employee-tracker.png';
import passwordGenerator from '../img/portfolio/password-generator.png';
import personalAssetManager from '../img/portfolio/personal-asset-manager.png';
import readmeTemplate from '../img/portfolio/readme-template.png';
import teamProfileGenerator from '../img/portfolio/team-profile-generator.png';
import weatherDashboard from '../img/portfolio/weather-dashboard.png';
import workDayScheduler from '../img/portfolio/work-day-scheduler.png';
import mernBookSearchEngine from '../img/portfolio/mern-book-search-engine.png';
import socialNetworkAPI from '../img/portfolio/social-network-api.png';
import textEditor from '../img/portfolio/text-editor.png';
import techBlog from '../img/portfolio/tech-blog.png';

import CarouselList from './CarouselList';

const Carousel = () => {

    // GitHub Repositories
    const githubRepositories = [
        {
            id: 1,
            name: 'MERN Book Search Engine', 
            description: 'A MERN (MongoDB, Express, React and Node) Application using GraphQL!',
            img: mernBookSearchEngine,
            githubURL: 'https://github.com/richardguarnieri/MERN-book-search-engine',
            appURL: 'https://peaceful-hollows-56780.herokuapp.com/',
        },
        {
            id: 2,
            name: 'Social Network API', 
            description: 'A Social Network API built w/ Node.js, Express.js, and Mongoose ODM!',
            img: socialNetworkAPI,
            githubURL: 'https://github.com/richardguarnieri/social-network-api',
            appURL: '',
        },
        {
            id: 3,
            name: 'Text Editor', 
            description: 'A Text Editor PWA (Progressive Web Application)!',
            img: textEditor,
            githubURL: 'https://github.com/richardguarnieri/text-editor',
            appURL: 'https://text-editor-jate-bc.herokuapp.com/',
        },
        {
            id: 4,
            name: 'E-Commerce Back End', 
            description: 'An E-Commerce Application w/ Node.js, Sequelize ORM and MySQL Driver!',
            img: eCommerceBackEnd,
            githubURL: 'https://github.com/richardguarnieri/e-commerce-back-end',
            appURL: '',
        },
        {
            id: 5,
            name: 'Employee Tracker', 
            description: 'View and Manage Departments, Roles, and Employees in your Company',
            img: employeeTracker,
            githubURL: 'https://github.com/richardguarnieri/employee-tracker',
            appURL: '',
        },
        {
            id: 6,
            name: 'Tech Blog', 
            description: 'View and Manage Departments, Roles, and Employees in your Company',
            img: techBlog,
            githubURL: 'https://github.com/richardguarnieri/tech-blog',
            appURL: 'https://richard-tech-blog.herokuapp.com/',
        },
        {
            id: 7,
            name: 'Team Profile Generator', 
            description: 'Team Profile Generator via Node.js and HTML',
            img: teamProfileGenerator,
            githubURL: 'https://github.com/richardguarnieri/team-profile-generator',
            appURL: '',
        },
        {
            id: 8,
            name: 'Weather Dashboard', 
            description: 'A simple weather dashboard and forecast',
            img: weatherDashboard,
            githubURL: 'https://github.com/richardguarnieri/e-commerce-back-end',
            appURL: '',
        },
        {
            id: 9,
            name: 'README Template', 
            description: 'A README.md template for your projects',
            img: readmeTemplate,
            githubURL: 'https://github.com/richardguarnieri/readme-template',
            appURL: '',
        },
        {
            id: 10,
            name: 'Password Generator', 
            description: 'A random password generator',
            img: passwordGenerator,
            githubURL: 'https://github.com/richardguarnieri/password-generator',
            appURL: 'https://richardguarnieri.github.io/password-generator/',
        },
        {
            id: 11,
            name: 'Code Quiz', 
            description: 'A JavaScript Coding Quiz Challenge',
            img: codeQuiz,
            githubURL: 'https://github.com/richardguarnieri/code-quiz',
            appURL: 'https://richardguarnieri.github.io/code-quiz/',
        },
        {
            id: 12,
            name: 'Work Day Scheduler', 
            description: 'A simple calendar app for scheduling your work day',
            img: workDayScheduler,
            githubURL: 'https://github.com/richardguarnieri/work-day-scheduler',
            appURL: 'https://richardguarnieri.github.io/work-day-scheduler/',
        },
        {
            id: 13,
            name: 'Personal Asset Manager', 
            description: 'A centralized personal portfolio valuation',
            img: personalAssetManager,
            githubURL: 'https://github.com/richardguarnieri/personal-asset-manager',
            appURL: 'https://richardguarnieri.github.io/personal-asset-manager/',
        },
    ];

    // Carousel Horizontal Scrolling
    let scrollPerClick;
    let imagePadding = 20;
    let scrollAmount = 0;
        
    const scrollLeft = () => {
        const carouselBox = document.querySelector('#carousel-box');
        // // Gets the carousel item (the li element) width and adds a bit of arbitrary padding
        scrollPerClick = carouselBox.children[0].clientWidth + imagePadding;
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
        const carouselBox = document.querySelector('#carousel-box');
        // // Gets the carousel item (the li element) width and adds a bit of arbitrary padding
        scrollPerClick = carouselBox.children[0].clientWidth + imagePadding;
        if (scrollAmount <= carouselBox.scrollWidth - carouselBox.clientWidth) {
            carouselBox.scrollTo({
                top: 0,
                left: (scrollAmount += scrollPerClick),
                behavior: "smooth"
            });
        };
    };

  return (
    <div>
        {/* Carousel */}
        <div id="carousel" className="flex justify-between my-5">
            {/* Carousel Left Button */}
            <button id="carousel-left-btn" className="group px-3" aria-label="carousel left button" onClick={scrollLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition group-active:text-blue-500 group-hover:scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            {/* Carousel List */}
            <CarouselList githubRepositories={githubRepositories} />
            {/* Carousel Right Button */}
            <button id="carousel-right-btn" className="group px-3" aria-label="carousel right button" onClick={scrollRight}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition group-active:text-blue-500 group-hover:scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        {/* Link to GitHub */}
        <div>
            <p>If you want to see more content, please visit my <span className="font-bold">GitHub</span> profile here: &nbsp;
                <a href="https://github.com/richardguarnieri" target="_blank" rel='noreferrer' aria-label="GitHub">
                    <i className="bi bi-github
                    inline-block text-4xl align-middle transition duration-300
                    hover:cursor-pointer hover:text-blue-500 hover:-translate-y-1
                    ">
                    </i>
                </a>
            </p>
        </div>
    </div>
  )
}

export default Carousel