import React from 'react';
import {useLocation} from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    const propsData = location.state;

    return (
        <section
            className="text-gray-600 bg-gray-100 sm:h-screen p-10 sm:p-20 body-font overflow-hidden">
            <div className="px-3 py-15 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="hospitalfinder"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={propsData.thumbnail}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">HOSPITAL NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{propsData.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-700 ml-5">Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <div className="text-gray-600">
                                    <h1 className="text-sm title-font text-gray-500 tracking-widest">Specialized hospital in Bengaluru, Karnataka.</h1>
                                </div>
                            </span>
                        </div>
                        <p className="leading-relaxed">As a speciality hospital,Apollo Spectra Hospital
                            offers expert and quality healthcare,with all the benefits of a large hospital
                            in a friendly and more accessible facility.With 17 centres spread across 12
                            cities,a team of 2,730+ leading doctors,and more than 2,00,000 succesfull
                            surgeries.<br/><br/>
                        </p>
                        <div className="text-gray-600">
                            <h1 className="text-sm title-font text-gray-500 tracking-widest">Address : {propsData.address}<br/><br/>
                            </h1>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-xl text-gray-500">Services |
                                <br/> {propsData
                                    .services
                                    .map((service, index) => (
                                        <span key={index}>{service}&nbsp; &nbsp;</span>
                                    ))
}
                            </span>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex"></div>
                                <div className="flex ml-6 items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button
                                className="flex mr-5 mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Appointment Scheduling</button>
                            <a href={propsData.direction} target='blank'
                                className="flex mr-5 mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Direction</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Product