import React,{useContext} from 'react';
// import {Link} from 'react-router-dom';
import Navbar from '../Hospitals/Navbar';
import {Alert} from "@material-tailwind/react";
import { UserData } from '../../../../Context/userDataContext';

const Product = (propsData) => {
    // console.log(propsData.data);
    const alertbool = useContext(UserData);
    return (
        <div>
            <div style={{display : `${alertbool.userData ? "block":"none"}`}}>
                <Navbar />
            </div>
            <section
                className="text-gray-600 bg-gray-100  p-10 sm:p-10 body-font overflow-hidden">
                <Alert
                // icon={< Icon />}
                    open={alertbool.open}
                    className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">
                    A simple alert for showing message.
                </Alert>
                <div className="px-3 py-15 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="hospitalfinder"
                            className="lg:w-1/2 w-full p-10 lg:h-auto h-64 object-fill object-center rounded"
                            src={propsData.data.thumbnail}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">HOSPITAL NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{propsData.data.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">

                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">&#9733; {propsData.data.rating}</h2>
                                    <span className="text-gray-700 ml-5">Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <div className="text-gray-600">
                                        <h1 className="text-sm title-font text-gray-500 tracking-widest">Specialized hospital in Bengaluru, Karnataka.</h1>
                                    </div>
                                </span>
                            </div>
                            <div className="text-gray-600">
                                <h1 className="text-sm font-semibold title-font text-gray-500 tracking-widest">Contact : {propsData.data.contact}<br/><br/>
                                </h1>
                            </div>
                            <div className="text-gray-600">
                                <h1 className="text-sm font-semibold title-font text-gray-500 tracking-widest">Ambulance Service : {propsData.data.ambulance}<br/><br/>
                                </h1>
                            </div>
                            <div className="text-gray-600">
                                <h1 className="text-sm font-semibold title-font text-gray-500 tracking-widest">Address : {propsData.data.address}<br/><br/>
                                </h1>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-sm sm:text-xl text-gray-500 ">
                                    <b className='text-xl'>Services |</b>
                                    <br/> {propsData
                                        .data
                                        .services
                                        .map((service, index) => (
                                            <span
                                                className='p-2 w-1'
                                                key={index}>{service} &nbsp; &nbsp;|</span>
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
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">

                                <a
                                    href={propsData.data.direction}
                                    target='blank'
                                    className="flex mr-5 mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Direction</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Product