import codeQuiz from '../img/portfolio/code-quiz.png';
import eCommerceBackEnd from '../img/portfolio/e-commerce-back-end.png';
import employeeTracker from '../img/portfolio/employee-tracker.png';
import passwordGenerator from '../img/portfolio/password-generator.png';
import personalAssetManager from '../img/portfolio/personal-asset-manager.png';
// import professionalReadmeGenerator from '../img/portfolio/professional-README-generator.png';
import readmeTemplate from '../img/portfolio/readme-template.png';
import teamProfileGenerator from '../img/portfolio/team-profile-generator.png';
import weatherDashboard from '../img/portfolio/weather-dashboard.png';
import workDayScheduler from '../img/portfolio/work-day-scheduler.png';

const Portfolio = () => {

    // Carousel Horizontal Scrolling
    // Variables
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
        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-[100vh] px-5">
            {/* Sticky Header w/ Bottom Border */}
            <div id="portfolio-header" className="sticky top-0 z-50 bg-white border-b border-slate-100">
                {/* Header Container */}
                <div className="container mx-auto py-3">
                {/* inline-block to allow bg color to clip to text; otherwise, we wouldn't notice as it would span the whole row */}
                    <h2 id="portfolio-title" className="text-4xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-sky-800">Portfolio</h2>
                </div>
            </div>

            {/* Section Container */}
            <div className="container mx-auto">
                {/* Portfolio Sub-Heading */}
                <div className="mt-5">
                    <h3 className="text-2xl font-bold text-gray-700">A brief look at my portfolio</h3>
                    <p className="text-2xl font-extralight text-gray-700">See a glimpse of several projects I've had the pleasure to work on:</p>
                </div>
                {/* Portfolio Content */}
                <div className="flex flex-col">
                    {/* Carousel */}
                    <div id="carousel" className="flex justify-between my-5">
                        {/* Carousel Left Button */}
                        <button id="carousel-left-btn" className="group px-3" onClick={scrollLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition group-active:text-blue-500 group-hover:scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {/* Carousel Box */}
                        <ul id="carousel-box" className="flex items-center py-8 px-1 overflow-scroll space-x-5">

                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">E-Commerce Back End</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">An E-Commerce Application w/ Node.js, Sequelize ORM and MySQL Driver</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={eCommerceBackEnd} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">E-Commerce Back End</p>
                                            <p className="text-xs md:text-lg xl:text-lg">An E-Commerce Application w/ Node.js, Sequelize ORM and MySQL Driver</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/e-commerce-back-end" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </li>

                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Employee Tracker</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">View and Manage Departments, Roles, and Employees in your Company</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={employeeTracker} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Employee Tracker</p>
                                            <p className="text-xs md:text-lg xl:text-lg">View and Manage Departments, Roles, and Employees in your Company</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/employee-tracker" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </li>

                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Team Profile Generator</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">Team Profile Generator via Node.js and HTML</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={teamProfileGenerator} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Team Profile Generator</p>
                                            <p className="text-xs md:text-lg xl:text-lg">Team Profile Generator via Node.js and HTML</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/team-profile-generator" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </li>

                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Weather Dashboard</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A simple weather dashboard and forecast</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={weatherDashboard} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Weather Dashboard</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A simple weather dashboard and forecast</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/weather-dashboard" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                        <a href="https://richardguarnieri.github.io/weather-dashboard/" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                            hover:bg-gray-50
                                            ">
                                            Application
                                        </a>
                                    </div>
                                </div>
                            </li>
                    
                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Password Generator</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A random password generator</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={passwordGenerator} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Password Generator</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A random password generator</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/password-generator" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                        <a href="https://richardguarnieri.github.io/password-generator/" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                            hover:bg-gray-50
                                            ">
                                            Application
                                        </a>
                                    </div>
                                </div>
                            </li>
                    
                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">README.md Template</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A README.md template for your projects</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={readmeTemplate} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">README.md Template</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A README.md template for your projects</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/readme-template" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </li>
                    
                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Code Quiz</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A JavaScript Coding Quiz Challenge</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={codeQuiz} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Code Quiz</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A JavaScript Coding Quiz Challenge</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/code-quiz" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                        <a href="https://richardguarnieri.github.io/code-quiz/" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                            hover:bg-gray-50
                                            ">
                                            Application
                                        </a>
                                    </div>
                                </div>
                            </li>
                    
                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Work Day Scheduler</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A simple calendar app for scheduling your work day</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={workDayScheduler} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Work Day Scheduler</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A simple calendar app for scheduling your work day</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/work-day-scheduler" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                        <a href="https://richardguarnieri.github.io/work-day-scheduler/" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                            hover:bg-gray-50
                                            ">
                                            Application
                                        </a>
                                    </div>
                                </div>
                            </li>
                    
                            {/* Carousel Item */}
                            <li className="basis-full shrink-0 lg:basis-6/12">
                                {/* Carousel Item Header */}
                                <div className="text-center lg:hidden">
                                    <p className="text-md font-bold md:text-2xl">Personal Asset Manager</p>
                                    <p className="px-5 pb-3 text-xs md:text-lg">A centralized personal portfolio valuation</p>
                                </div>
                                {/* Carousel Item Content */}
                                <div className="group rounded-lg transition hover:shadow-lg">
                                    <div className="relative aspect-video">
                                        <img src={personalAssetManager} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                                        <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                            bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                            transition duration-300 hover:scale-100 group-hover:opacity-90">
                                            <p className="text-sm md:text-2xl xl:text-3xl">Personal Asset Manager</p>
                                            <p className="text-xs md:text-lg xl:text-lg">A centralized personal portfolio valuation</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                                        <a href="https://github.com/richardguarnieri/personal-asset-manager" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                            transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                            hover:bg-[length:100%_100%]
                                            ">
                                            GitHub
                                        </a>
                                        <a href="https://richardguarnieri.github.io/personal-asset-manager/" target="_blank" rel='noreferrer' 
                                            className="
                                            px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                            hover:bg-gray-50
                                            ">
                                            Application
                                        </a>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>

                        {/* Carousel Right Button */}
                        <button id="carousel-right-btn" className="group px-3" onClick={scrollRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition group-active:text-blue-500 group-hover:scale-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Link to GitHub */}
                    <div>
                        <p>If you want to see more content, please visit my <span className="font-bold">GitHub</span> profile here: &nbsp;
                            <a href="https://github.com/richardguarnieri" target="_blank" rel='noreferrer'>
                                <i className="bi bi-github
                                inline-block text-4xl align-middle transition duration-300
                                hover:cursor-pointer hover:text-blue-500 hover:-translate-y-1
                                ">
                                </i>
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio