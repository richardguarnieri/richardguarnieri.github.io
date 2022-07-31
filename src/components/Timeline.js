// import dachser from '../img/timeline/dachser.png';
import icss from '../img/timeline/icss.jpeg';
import panalpina from '../img/timeline/panalpina.jpeg';

const Timeline = () => {
  return (
    <div>
        {/* Timeline */}
        <div>
            {/* Timeline Sub-Heading */}
            <div className="mt-5">
                <h3 className="text-2xl font-bold text-gray-700">Timeline</h3>
                <p className="text-2xl font-extralight text-gray-700">My professional experience - mainly <span className="font-semibold">finance</span> driven:</p>
            </div>
            {/* Timeline Content */}
            <div className="flex flex-wrap">
                {/* Current Job */}
                <div className="flex-1 basis-full m-5 flex items-center md:basis-5/12">
                    <div className="m-5 border-l pl-12">
                        <div className="relative flex">
                            <img src={icss} alt="" srcset="" className="absolute left-[-4.75rem] w-14 h-14 rounded-full shadow-lg" />
                            <p className="px-2 py-1 bg-green-600 border rounded text-white text-sm">Sep 2020 - Present</p>
                            <p className="ml-3 px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm">Mexico</p>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">Chief Financial Officer, Latin America</h3>
                        <p className="font-extralight">Inter-Con Security Systems, Inc.</p>
                        <p className="mt-3">Led high-performing teams that drove financial results and innovation across Latin America including Mexico, Colombia, Dominican
                            Republic, Guatemala, Chile and Venezuela and steered complete reorganization of Latin America's structure, including restructuring of
                            financial and accounting systems</p>
                    </div>
                </div>
                {/* Job #2 */}
                <div className="flex-1 basis-full m-5 flex items-center md:basis-5/12">
                    <div className="m-5 border-l pl-12">
                        <div className="relative flex">
                            <img src={panalpina} alt="" srcset="" className="absolute left-[-4.75rem] w-14 h-14 rounded-full shadow-lg" />
                            <p className="px-2 py-1 bg-red-600 border rounded text-white text-sm">Jun 2019 - Aug 2020</p>
                            <p className="ml-3 px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm">Mexico</p>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">Chief Financial Officer, Mexico</h3>
                        <p className="font-extralight">Panalpina</p>
                        <p className="mt-3">Led DSV Panalpina M&A efforts in Mexico valued at USD $60 million, including transaction funding, due diligence, negotiation, and
                            post-closing integration and navigated through and resolved legal and compliance challenges (over USD $5 million in disputed collections) and drove efforts in
                            attracting and developing finance talent</p>
                    </div>
                </div>
                {/* Job #3 */}
                <div className="flex-1 basis-full m-5 flex items-center md:basis-5/12">
                    <div className="m-5 border-l pl-12">
                        <div className="relative flex">
                            <img src={panalpina} alt="" srcset="" className="absolute left-[-4.75rem] w-14 h-14 rounded-full shadow-lg" />
                            <p className="px-2 py-1 bg-red-600 border rounded text-white text-sm">Jul 2018 - May 2019</p>
                            <p className="ml-3 px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm">Mexico</p>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">Head of Controlling, Mexico</h3>
                        <p className="font-extralight">Panalpina</p>
                        <p className="mt-3">Managed and ensured all financial activities, records, and reports of a CHF $300 million annual revenue organization accurately
                            represented the business's financial state of affairs and structured and streamlined redundant day-to-day operations resulting in more accurate and timely financial information, boosting overall
                            performance by more than 40%.</p>
                    </div>
                </div>
                {/* Job #4 */}
                <div className="hidden flex-1 m-5 flex items-center md:flex md:basis-5/12">
                    <div className="m-5 border-l pl-12">
                        <div className="relative flex">
                            <img src={panalpina} alt="" srcset="" className="absolute left-[-4.75rem] w-14 h-14 rounded-full shadow-lg" />
                            <p className="px-2 py-1 bg-red-600 border rounded text-white text-sm">Sep 2017 - Jun 2018</p>
                            <p className="ml-3 px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm">Mexico</p>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">Finance Controlling Manager, Central America and the Caribbean</h3>
                        <p className="font-extralight">Panalpina</p>
                        <p className="mt-3">Directed Financial Reporting and Controlling tasks in five countries: Panama, Costa Rica, Dominican Republic, El Salvador and
                            Venezuela and drafted and executed the centralization of Finance's Central America and the Caribbean activities into one single cluster in Panama</p>
                    </div>
                </div>
                {/* Job #5 */}
                <div className="hidden flex-1 m-5 flex items-center xl:flex xl:basis-5/12">
                    <div className="m-5 border-l pl-12">
                        <div className="relative flex">
                            <img src={panalpina} alt="" srcset="" className="absolute left-[-4.75rem] w-14 h-14 rounded-full shadow-lg" />
                            <p className="px-2 py-1 bg-red-600 border rounded text-white text-sm">Dec 2014 - Aug 2017</p>
                            <p className="ml-3 px-2 py-1 border border-gray-300 rounded text-gray-700 text-sm">Panama</p>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-gray-900">Finance Controlling, Panama</h3>
                        <p className="font-extralight">Panalpina</p>
                        <p className="mt-3">Oversaw operations of the Finance organization in Panama and 
                            instrumental in successful turnaround of Panama's loss making operation (over CHF $5 million turnaround) - 
                            key member in effective implementations of multi-million dollar business cases</p>
                    </div>
                </div>
                {/* Job #5 */}
                <div className="hidden flex-1 m-5 flex items-center xl:flex xl:basis-5/12">
                    {/* Empty */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline