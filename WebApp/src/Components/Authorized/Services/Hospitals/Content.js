/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
// import data from './hospital.json' ;
import {toast} from "react-toastify";
import {BASE_URL} from '../../../../config';
import {Link} from 'react-router-dom';
import {UserData} from '../../../../Context/userDataContext';
import { commanGet, commanPost } from '../../../../Context/CommanMethods';

export default function Content(props) {

    const [loading, setLoading] = useState(true);
    const [data,
        setdata] = useState([]);
    

    useEffect(() => {
        setdata(props.Data);
    } );

    return (
        <div className='bg-gray-100'>
            
            <h1
                className="title-font text-center sm:text-4xl text-3xl mb-4 pt-10 font-medium text-gray-900">
                <b>Hospitals</b>
            </h1>
            <section className="text-gray-600 body-font">
                <div className="px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {data.map((elements) => {
                            if (props.Data.length > 0) {
                                return (
                                    <Link
                                        to="/hospital"
                                        state={elements._doc}
                                        key={elements._doc._id}
                                        className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="p-6 rounded-lg">
                                            <img
                                                className="h-40 rounded w-50 object-cover object-center block mx-auto sm:inline sm:mb-6"
                                                style={{
                                                width: "250px"
                                            }}
                                                src={elements._doc.thumbnail}
                                                alt="content"/>
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{elements._doc.name}</h3>
                                            <p className="leading-relaxed text-base">{elements
                                                    ._doc
                                                    .address
                                                    .slice(0, 50)}...</p>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">&#9733; {elements._doc.rating}
                                                <br/>
                                                <span className='text-sm text-amber-700'>{elements
                                                        .distance
                                                        .toFixed(2) * 2}
                                                    Km Away</span>
                                            </h2>
                                        </div>
                                    </Link>
                                )
                            } else {
                                if (elements._doc.services.includes(useCat.cat)) {
                                    return (
                                        <Link
                                            key={elements._doc._id}
                                            to="/hospital"
                                            state={elements._doc}
                                            className="xl:w-1/4 md:w-1/2 p-4">
                                            <div className="p-6 rounded-lg">
                                                <img
                                                    className="h-40 rounded w-50 object-cover object-center mb-6"
                                                    style={{
                                                    width: "250px"
                                                }}
                                                    src={elements._doc.thumbnail}
                                                    alt="content"/>
                                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{elements._doc.name}</h3>
                                                <p className="leading-relaxed text-base">{elements
                                                        ._doc
                                                        .address
                                                        .slice(0, 50)}...</p>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">&#9733; {elements._doc.rating}
                                                    <br/>
                                                    <span className='text-sm text-amber-700'>{elements
                                                            .distance
                                                            .toFixed(2) * 2}
                                                        Km Away</span>
                                                </h2>
                                            </div>
                                        </Link>
                                    )
                                } else 
                                    return null;
                                }
                            
                        })
}
                    </div>
                </div>
            </section>
        </div>
    )
}
