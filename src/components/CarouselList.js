const CarouselList = ({ githubRepositories }) => {
  return (
    // Carousel List
    <ul id="carousel-box" className="flex items-center py-8 px-1 overflow-scroll space-x-5">
        {/* Carousel Item */}
        {githubRepositories.map((repo) => {
            return (
                <li className="basis-full shrink-0 lg:basis-6/12" key={repo.id}>
                    {/* Carousel Item Header */}
                    <div className="text-center lg:hidden">
                        <p className="text-md font-bold md:text-2xl">{repo.name}</p>
                        <p className="px-5 pb-3 text-xs md:text-lg">{repo.description}</p>
                    </div>
                    {/* Carousel Item Content */}
                    <div className="group rounded-lg transition hover:shadow-lg">
                        <div className="relative aspect-video">
                            <img src={repo.img} alt="" className="rounded-t-lg w-full h-full object-cover"/>
                            <div className="absolute flex flex-col justify-center items-center inset-0 z-10 opacity-0 
                                bg-slate-900 text-center text-white space-y-3 rounded-t-lg
                                transition duration-300 hover:scale-100 group-hover:opacity-90">
                                <p className="text-sm md:text-2xl xl:text-3xl">{repo.name}</p>
                                <p className="text-xs md:text-lg xl:text-lg">{repo.description}</p>
                            </div>
                        </div>
                        <div className="flex justify-center px-3 py-3 space-x-5 bg-gray-200 text-center rounded-b-lg">
                            <a href={repo.githubURL} target="_blank" rel='noreferrer' 
                                className="
                                px-4 py-2 bg-red-600 border rounded-md text-white font-medium text-sm
                                transition-all duration-300 bg-gradient-to-b from-red-700 to-red-700 bg-no-repeat bg-center bg-[length:0%_0%]
                                hover:bg-[length:100%_100%]
                                ">
                                GitHub
                            </a>
                            {(repo.appURL && 
                            <a href={repo.appURL} target="_blank" rel='noreferrer' 
                                className="
                                px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm
                                hover:bg-gray-50
                                ">
                                Application
                            </a>
                            )}
                        </div>
                    </div>
                </li>
            );
        })}
    </ul>
  )
}

export default CarouselList