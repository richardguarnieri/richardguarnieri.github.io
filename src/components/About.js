import Technologies from "./Technologies";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div>
         {/* About Section */}
        <section id="about" className="mt-4 px-5 lg:mt-24">

        {/* Sticky Header w/ Bottom Border */}
        <div id="about-header" className="sticky top-0 z-50 bg-white border-b border-slate-100">
            {/* Header Container */}
            <div className="container mx-auto py-3">
            {/* inline-block to allow bg color to clip to text; otherwise, we wouldn't notice as it would span the whole row */}
                <h2 id="about-title" className="text-4xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-sky-800">About Me</h2>
            </div>
        </div>
        {/* Section Container */}
        <div className="container mx-auto">

            {/* Information About Me */}
            <div className="">
                {/* Information About Me Sub-Heading */}
                <div className="mt-5">
                    <h3 className="text-2xl font-bold text-gray-700">Information About Me</h3>
                    <p className="text-2xl font-extralight text-gray-700">A bit about myself:</p>
                </div>
                {/* Information About Me Content */}
                <div className="flex flex-col justify-between items-center xl:flex-row">
                    {/* Bio */}
                    <div className="my-10 xl:basis-6/12 xl:mr-10">
                        <p className="">
                            In addition to my computing and development endeavors, I'm also an internationally experienced, results-driven <span className="font-bold">finance</span> professional with 
                            solid experience in the <span className="font-bold">business</span> field such as successful execution of turnarounds, mergers and acquisitions (M&A), 
                            systems implementation, business transformation, and people-focused approach in both public and privately held companies.
                            <br/><br/>
                            Fermentum dui faucibus in ornare. At lectus urna duis convallis convallis tellus id interdum velit. 
                            Aliquam faucibus purus in massa tempor nec. A scelerisque purus semper eget duis at tellus at. Mi eget mauris pharetra et ultrices. 
                            Netus et malesuada fames ac turpis egestas. Proin fermentum leo vel orci porta non. Velit sed ullamcorper morbi tincidunt ornare. 
                            Orci dapibus ultrices in iaculis nunc. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. 
                            Ut sem nulla pharetra diam sit. Sed elementum tempus egestas sed sed risus pretium quam. In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                            Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Sagittis eu volutpat odio facilisis. Amet tellus cras adipiscing enim eu turpis.</p>
                    </div>
                    {/* Blocks */}
                    <div className="flex flex-wrap justify-center items-center xl:basis-6/12">
                        {/* Block 1 */}
                        <div className="group h-[12rem] m-2 p-5 border rounded-md 
                            transition duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 
                            sm:m-1 sm:max-w-[45%] md:min-w-[45%]">
                            <h3 className="relative text-4xl font-bold text-slate-800 transition duration-300 group-hover:text-blue-500">8+</h3>
                            <p className="
                                relative mt-3 pl-12 text-lg
                                before:absolute before:left-0 before:top-3 before:w-8 before:h-0.5 before:bg-gray-300
                                before:transition before:duration-300 before:group-hover:bg-blue-500
                                ">
                                Years of <span className="font-bold transition duration-300 group-hover:text-blue-500">Professional</span> Experience
                            </p>
                        </div>
                        {/* Block 2 */}
                        <div className="group h-[12rem] m-2 p-5 border rounded-md 
                            transition duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 
                            sm:m-1 sm:max-w-[45%] md:min-w-[45%]">
                            <h3 className="relative text-3xl font-bold text-slate-800 transition duration-300 group-hover:text-blue-500">Data-Driven</h3>
                            <p className="
                                relative mt-3 pl-12 text-lg
                                before:absolute before:left-0 before:top-3 before:w-8 before:h-0.5 before:bg-gray-300
                                before:transition before:duration-300 before:group-hover:bg-blue-500
                                ">
                                Computational <span className="font-bold transition duration-300 group-hover:text-blue-500">Thinking</span> and Science
                            </p>
                        </div>
                        {/* Block 3 */}
                        <div className="hidden group h-[12rem] m-2 p-5 border rounded-md 
                            transition duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 
                            sm:block sm:m-1 sm:max-w-[45%]">
                            <h3 className="relative text-3xl font-bold text-slate-800 transition duration-300 group-hover:text-blue-500">Algorithmic Finance</h3>
                            <p className="
                                relative mt-3 pl-12 text-lg
                                before:absolute before:left-0 before:top-3 before:w-8 before:h-0.5 before:bg-gray-300
                                before:transition before:duration-300 before:group-hover:bg-blue-500
                                ">
                                Bridging Computer Science and <span className="font-bold transition duration-300 group-hover:text-blue-500">Finance</span>
                            </p>
                        </div>
                        {/* Block 4 */}
                        <div className="hidden group min-h-[12rem] max-w-[45%] m-2 p-5 border rounded-md 
                            transition duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 
                            sm:block sm:m-1 sm:max-w-[45%]">
                            <h3 className="relative text-3xl font-bold text-slate-800 transition duration-300 group-hover:text-blue-500">Full Stack</h3>
                            <p className="
                                relative mt-3 pl-12 text-lg
                                before:absolute before:left-0 before:top-3 before:w-8 before:h-0.5 before:bg-gray-300
                                before:transition before:duration-300 before:group-hover:bg-blue-500
                                ">
                                Broad Skillset Producing <span className="font-bold transition duration-300 group-hover:text-blue-500">End-to-End</span> Solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Technologies />
            <Timeline />
        </div>
    </section>
    </div>
  )
}

export default About