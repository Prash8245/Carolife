//import React, {useContext ,useState} from 'react'
import img from '../../../../Assets/waldemar-dqhmbjutkQA-unsplash.jpg'
import {UserData} from '../../../../Context/userDataContext';
import { AiOutlineSearch } from "react-icons/ai";
import Content from './Content';
import React, {useContext, useEffect, useState} from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
import {toast} from "react-toastify";
import { commanGet, commanPost } from '../../../../Context/CommanMethods';


export default function Hero() {
    const search = useContext(UserData);
    const [searchValue, setsearch] = useState("All");

    const [loading, setLoading] = useState(true);
    const [data,
        setdata] = useState([]);
    const [lat,
        setlat] = useState(13.017966);
    const [long,
        setlong] = useState(77.522527);
    //const useCat = useContext(UserData);
    const [regexPattern,
        setpattern] = useState("");

    const getLocation = async() => {
        if (navigator.geolocation) {
            await navigator
                .geolocation
                .getCurrentPosition(position => {
                    const {latitude, longitude} = position.coords;
                    setlat(latitude);
                    setlong(longitude);
                    // console.log(currentLocation)
                }, error => {
                    console.error(`Error getting current location: ${error.message}`);
                });
        } else {
            console.error('Geolocation is not supported by this browser.');

        }
    };

    const fetchData = async() => {
        try {
            getLocation();
            const dataBody = {
                latitude: lat,
                longitude: long,
                search : regexPattern === "All" ? "":regexPattern
            }

            const res = await commanPost("data/hospitals",dataBody);

            const message = await res.json();
            if (!res.ok) {
                setLoading(false);
                toast.error(message.message,{
                    autoClose: 8000,
                    position: toast.POSITION.TOP_RIGHT, 
                })
                return null
                //throw new Error(message);
            }
            setLoading(false);
            toast.success(message,{
                autoClose: 8000,
                position: toast.POSITION.TOP_RIGHT, 
            });
            // console.log(message);
            setdata(message.data);
        } catch (error) {
            console.log(error);
            toast.error("Error Fetching Data",{
                autoClose: 8000,
                position: toast.POSITION.TOP_RIGHT, 
            })
            //throw new Error(error);
        }
    }

    useEffect(() => {
        
        fetchData();
    },[] );

    return (
        <div>
            <div style={{ position:'fixed',left:'50%', top:'50%' }}>
            {loading ? (
                <PulseLoader loading={loading} size={15} color={"#123abc"} />
            ) : null }
            </div>
            <section className="text-gray-600 body-font p-10 bg-gray-100">
                <div className="mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            <b>Carolife - Care of Life</b>
                        </h2>
                        <h2 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">Life Caring Soluions</h2>
                        <p className="mb-8 leading-relaxed">Healing is a journey, and hospitals are the compass guiding us to wellness.</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Enter Hospital Name</label>
                                <input

                                    onChange ={(event)=>{
                                        //event.preventDefault();
                                        const term = event.target.value;
                                        setsearch(term);
                                        setpattern(term)
                                        fetchData();
                                        console.log(term);
                                        console.log(search.search);
                                    }}

                                    onBlur={(event)=>{
                                        setpattern("")
                                        fetchData();
                                    }}

                                    type="text"
                                    id="hero-field"
                                    name="hero-field"
                                    className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            {/* <button
                                
                                className="inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><AiOutlineSearch />
                                </button> */}
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={img}/>
                    </div>
                </div>
            </section>
            {/* {searchValue === "All" ? <Content searchTerm = "all" /> : <Content searchTerm = {searchValue}/>} */}
            <Content Data = {data} />
            
        </div>
    )
}
