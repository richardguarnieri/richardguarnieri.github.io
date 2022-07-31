import git from '../img/technologies/git.png';
import mongodb from '../img/technologies/mongodb.png';
import pandas from '../img/technologies/pandas.png';
import python from '../img/technologies/python.png';
import reactDark from '../img/technologies/react_dark.webp';
import graphQL from '../img/technologies/graphQL.svg';
// import react from '../img/technologies/react.svg';

const Technologies = () => {
  return (
    <div>
        {/* Technologies */}
            <div>
                {/* Technologies Sub-Heading */}
                <div className="mt-5">
                    <h3 className="text-2xl font-bold text-gray-700">Technologies</h3>
                    <p className="text-2xl font-extralight text-gray-700">Strong experience with the following Tech Stack:</p>
                </div>
                {/* Technologies Content */}
                <div className="flex flex-wrap justify-around">
                    {/* Front-End */}
                    <div className="basis-full m-10 flex flex-col items-center space-y-3 text-center sm:basis-4/12 lg:basis-2/12">
                        <img src={reactDark} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                        <h3 className="text-lg font-bold text-gray-900">Front-End</h3>
                        <p className="">HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, Templating Engines (Handlebars.js, Jinja), React</p>
                    </div>
                    {/* Back-End */}
                    <div className="basis-full m-10 flex flex-col items-center space-y-3 text-center sm:basis-4/12 lg:basis-2/12">
                        <img src={mongodb} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                        <h3 className="text-lg font-bold text-gray-900">Back-End</h3>
                        <p className="">Node.js, Express.js, Flask, SQL (MySQL, PostgreSQL), SQL ORMs (Sequelize, SQLAlchemy), NoSQL (MongoDB), NoSQL ODMs (Mongoose, PyMongo), RESTful APIs</p>
                    </div>
                    {/* Data Science */}
                    <div className="basis-full m-10 flex flex-col items-center space-y-3 text-center sm:basis-4/12 lg:basis-2/12">
                        <div className="flex space-x-5">
                            <img src={python} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                            <img src={pandas} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Data Science</h3>
                        <p className="">Python, Jupyter Notebooks, Data Analysis (Pandas, NumPy, SciPy), Machine Learning (scikit-learn), Data Visualization (d3.js), Web Scraping (Beautiful Soup), Interactive Web Mapping (Leaflet)</p>
                    </div>
                    {/* Other */}
                    <div className="basis-full m-10 flex flex-col items-center space-y-3 text-center sm:basis-4/12 lg:basis-2/12">
                        <div className="flex space-x-5">
                            <img src={git} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                            <img src={graphQL} alt="" srcset="" className="w-14 h-14 rounded-full shadow-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Other</h3>
                        <p className="">UNIX / Linux, Git, AWS, Heroku, TDD - Test-Driven Development (Jest), Cryptography, Progressive Web Applications (PWA), Webpack, GraphQL</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technologies