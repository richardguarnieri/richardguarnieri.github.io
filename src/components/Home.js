import profilePicture from '../img/profile_picture_main.jpg';

const Home = () => {
  return (
    <div>
        {/* Home Section */}
        <section id="home" className="min-h-[93vh] container mx-auto flex flex-col items-center p-5 space-y-8 lg:flex-row lg:space-x-8">
            {/* Left Side */}
            <div className="basis-1/2">
                <img 
                    src={profilePicture} 
                    alt="Richard Guarnieri wearing a navy suit, smiling and sitting on a chair" 
                    className="rounded-lg mx-auto grayscale 
                    transition duration-300 hover:grayscale-0"
                />
            </div>
            {/* Right Side */}
            <div className="basis-1/2 space-y-8">
                <h2 className="text-3xl font-extralight">Hi, I'm <span className="font-bold">Richard Guarnieri</span>. A Finance Professional, Full Stack Developer and Data Scientist. 👋</h2>
                <p className="">A technology-driven <span className="font-bold">engineer</span> with incredible passion towards tech and guided by curiosity, 
                    which have led me to eagerly seek to understand how things work at fundamental levels. 
                    I've been coding since childhood and am a self-taught programmer, always experimenting with various systems and tools.
                    <br/><br/>
                    Currently living in the <span className="font-bold">United States</span> and working on exciting new projects!
                </p>
                <a href="./assets/Richard_Guarnieri_Resume.pdf" target="_blank" 
                    className="
                    inline-block p-3 px-5 text-black border rounded-full 
                    transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 bg-no-repeat bg-right bg-[length:0%_100%]
                    hover:text-white hover:bg-[length:100%_100%]
                    ">
                    Download Resume
                </a>
            </div>
        </section>
    </div>
  )
}

export default Home