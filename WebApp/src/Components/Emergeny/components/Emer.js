import React, {useContext ,useEffect, useState} from 'react'
import {Menu, MenuHandler, MenuList, MenuItem, Button} from '@material-tailwind/react';
import {UserData} from '../../../Context/userDataContext';
import {AiTwotoneControl} from "react-icons/ai";
import { services } from '../../../Context/ArrayContext';
import {Link} from 'react-router-dom';
import {toast} from "react-toastify";
import { commanGet, commanPost } from '../../../Context/CommanMethods';
import PulseLoader from 'react-spinners/PulseLoader';
import EmergencyContent from './EmergencyContent';


export default function Emer() {
    const search = useContext(UserData);
    const userCat = useContext(UserData);

    const [loading, setLoading] = useState(true);
    const [data,
        setdata] = useState([]);
    const [lat,
        setlat] = useState(13.017966);
    const [long,
        setlong] = useState(77.522527);

    const [Category , setCategory] = useState("All")


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
                search : ""
            }

            const res = await commanPost("data/hospitals",dataBody);
            //console.log(res.status);
            const message = await res.json();
            if (!res.ok) {
                if(res.status === "401" || res.status === "403"){
                    window.location.href = "/login";
                }else{
                    setLoading(false);
                    toast.error(message.message,{
                        autoClose: 8000,
                        position: toast.POSITION.TOP_RIGHT, 
                    })
                }
               
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
        <div className='p-6' style={{
            backgroundColor: "#29335c"
        }}>
            <div style={{ position:'fixed',left:'50%', top:'50%' }}>
            {loading ? (
                <PulseLoader loading={loading} size={15} color={"#123abc"} />
            ) : null }
            </div>
            <Link
                to='/'
            >
            <p className='text-white p-5 text-xl'>𝒞𝒶𝓇𝑜𝐿𝒾𝒻𝑒</p>
            </Link>
            <div className='content-center items-center'>
                <form className='ms-0 sm:ms-80'>
                    <div className="flex">

                        <div className='visible flex w-full sm:hidden'>
                            <Menu>
                                <MenuHandler>
                                    <Button className='text-2xl p-2'><AiTwotoneControl/></Button>
                                </MenuHandler>
                                <MenuList>
                                    {services.map((elements, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                onClick={() => {
                                                userCat.setcat(elements);
                                                setCategory(elements);
                                                fetchData();
                                                console.log("Category is set to " + elements);
                                                console.log(userCat.cat);
                                            }}>
                                                {elements}</MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    onChange={(event) => {
                                    const term = event.target.value;
                                    
                                    console.log(term);
                                    search.setsearch(term);
                                    console.log(search.search);
                                }}
                                    id="search-dropdown"
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search near by hospitals"
                                    required/>
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                        <div className='hidden w-3/4 sm:flex'>
                            <Menu>
                                <MenuHandler>
                                    <Button >Services</Button>
                                </MenuHandler>
                                <MenuList>
                                    {services.map((elements, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                onClick={() => {
                                                userCat.setcat(elements);
                                                setCategory(elements);
                                                fetchData();
                                                console.log("Category is set to " + elements);
                                                console.log(userCat.cat);
                                            }}>
                                                {elements}</MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    onChange={(event) => {
                                        const term = event.target.value;
                                        console.log(term);
                                        search.setsearch(term);
                                        console.log(search.search);
                                    }}
                                    id="search-dropdown"
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search near by hospitals for the emergency"
                                    required/>
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <EmergencyContent Data = {data} Category = {Category}/>
        </div>
    )
}
