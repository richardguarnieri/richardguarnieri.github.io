import Carousel from './Carousel';

const Portfolio = () => {
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
                    <Carousel />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio