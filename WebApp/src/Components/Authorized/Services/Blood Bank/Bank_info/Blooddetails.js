import React from 'react'
import {useLocation} from 'react-router-dom';
import Navbar from '../../Hospitals/Navbar';

const Blooddetails = () => {
    const location = useLocation();
    const BankData = location.state;

    return (
        <div>
            <Navbar />
            <section className="bg-gray-100 min-h-screen text-gray-600 p-20 body-font overflow-hidden">
            <div className="container px-3 py-15 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="hospitalfinder"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={BankData.thumbnail}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BLOOD BANK</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{BankData.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex py-2 border-l-2 border-gray-200 space-x-2s">
                                <div className="text-gray-600">
                                    <h1 className="text-sm title-font text-gray-500 tracking-widest">Contact: {BankData.contact}</h1>
                                </div>
                            </span>
                        </div>
                        <p className="leading-relaxed"></p>
                        <div className="text-gray-600">
                            <h1 className="text-sm title-font text-gray-500 tracking-widest">Address: {BankData.address}
                                <br/><br/>
                            </h1>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-xl text-gray-500">Blood Availability:A+ ,A- ,B+  ,B-  , O+, O- ,AB+ ,AB-</span>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex"></div>
                                {/* <div className="flex ml-6 items-center">
                                    <span
                                        className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                        <div className="flex">
                            <a href={BankData.direction} 
                            target='blank'
                            className="flex mr-5 mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> Direction</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}
export default Blooddetails