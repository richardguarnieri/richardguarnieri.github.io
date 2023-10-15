const Contact = () => {
  return (
    <div>
        {/* Contact Section */}
     <section id="contact" className="mt-4 px-5 lg:mt-24">

        {/* Sticky Header w/ Bottom Border */}
        <div id="contact-header" className="sticky top-0 z-50 bg-white border-b border-slate-100">
            {/* Header Container */}
            <div className="container mx-auto py-3">
            {/* inline-block to allow bg color to clip to text; otherwise, we wouldn't notice as it would span the whole row */}
                <h2 id="contact-title" className="text-4xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-sky-800">Contact Me</h2>
            </div>
        </div>

        {/* Section Container */}
        <div className="container mx-auto">
            
            {/* Contact Sub-Heading */}
            <div className="mt-5">
                <h3 className="text-2xl font-bold text-gray-700">Get in touch</h3>
                <p className="text-2xl font-extralight text-gray-700">Want to get in touch? I'd love to hear from you. Here's how you can reach me:</p>
            </div>

            {/* Contact Content */}
            <div className="flex flex-col items-stretch lg:flex-row">
                {/* Contact Left */}
                <div className="m-10 mx-0 lg:basis-5/12 lg:flex lg:flex-col lg:mr-10">
                    {/* Personal Information Div */}
                    <div className="space-y-5 lg:flex-1">
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Location:</p>
                            <p className="text-xl font-extralight">Atlanta, Georgia, USA</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Email:</p>
                            <p className="text-xl font-extralight"><a href="mailto:richard.gm@outlook.com" className="hover:text-blue-500">richard.gm@outlook.com</a></p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Mobile:</p>
                            <p className="text-xl font-extralight">(770) 757-4230</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Languages:</p>
                            <p className="text-xl font-extralight text-right">English, Spanish, Portuguese</p>
                        </div>
                    </div>
                    {/* Horizontal Line */}
                    <div className="">
                        <hr className="my-5 w-1/2 mx-auto" />
                    </div>
                    {/* Social Icons Div */}
                    <div className="flex justify-center space-x-10">
                        {/* GitHub Icon */}
                        <a href="https://github.com/richardguarnieri" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="bi bi-github
                            inline-block text-4xl transition duration-300
                            hover:cursor-pointer hover:text-blue-500 hover:-translate-y-1
                            "></i>
                        </a>
                        {/* LinkedIn Icon */}
                        <a href="https://www.linkedin.com/in/rguarnieri/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="bi bi-linkedin
                            inline-block text-4xl transition duration-300
                            hover:cursor-pointer hover:text-blue-500 hover:-translate-y-1
                            "></i>
                        </a>
                        {/* Twitter Icon */}
                        <a href="https://twitter.com/ric_guarnieri" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <i className="bi bi-twitter
                            inline-block text-4xl transition duration-300
                            hover:cursor-pointer hover:text-blue-500 hover:-translate-y-1
                            "></i>
                        </a>
                    </div>
                </div>

                {/* Contact Right */}
                <div className="m-10 mx-0 lg:basis-6/12 lg:ml-10">
                    {/* Form */}
                    <form action="https://getform.io/f/f189cedb-1f8e-4701-af00-00d29ca41fef" method="POST">
                        <fieldset className="space-y-5">
                            {/* <legend>Please fill this form:</legend> */}
                            {/* Input - First Name / Last Name */}
                            <div className="flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
                                <label for="first-name" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">First Name</span>
                                    <input type="text" className="w-full border rounded p-2 placeholder:text-slate-300" id="first-name" name="first-name" placeholder="Your first name" required />
                                </label>
                                <label for="last-name" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Last Name</span>
                                    <input type="text" className="w-full border rounded p-2 placeholder:text-slate-300" id="last-name" name="last-name" placeholder="Your last name" required />   
                                </label>
                            </div>
                            {/* Input - Email / Phone Number */}
                            <div className="flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
                                <label for="email" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
                                    <input type="email" className="w-full border rounded p-2 placeholder:text-slate-300" id="email" name="email" aria-describedby="" placeholder="name@example.com" required />
                                </label>
                                <label for="phone" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Phone Number</span>
                                    <input type="tel" className="w-full border rounded p-2 placeholder:text-slate-300" id="phone" name="phone" placeholder="Your phone number" required />
                                </label>
                            </div>
                            {/* Input - Subject */}
                            <div className="flex">
                                <label for="subject" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Subject</span>
                                    <input type="text" className="w-full border rounded p-2 placeholder:text-slate-300" id="subject" name="subject" placeholder="Subject" required />   
                                </label>
                            </div>
                            {/* Input - Comments */}
                            <div className="">
                                <label for="text-area" className="w-full sm:w-[48%]">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Comment / Message</span>
                                    <textarea className="resize-none w-full h-48 border rounded p-2 placeholder:text-slate-300" id="text-area" name="comment" placeholder="Leave a comment here" required></textarea>
                                </label>
                            </div>
                            {/* Input - Submit Button */}
                            <button type="submit" className="
                                    inline-block p-3 px-5 text-black border rounded-full 
                                    transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 bg-no-repeat bg-right bg-[length:0%_100%]
                                    hover:text-white hover:bg-[length:100%_100%]
                                    ">
                                    Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
            
        </div>

    </section>
    </div>
  )
}

export default Contact