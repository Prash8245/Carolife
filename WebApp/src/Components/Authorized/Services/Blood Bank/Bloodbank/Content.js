import React,{useState ,useEffect} from 'react'
// import data from './laboratory.json' ;
import bbank from './images/bloodbank.jpg';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../../../config';
import {toast} from 'react-toastify';
import {Tabs, TabsHeader, Tab,} from "@material-tailwind/react";


export default function Content() {

    const [data, setdata] = useState([]);

    const fetchData = async()=>{
            try {
                // console.log(dataBody)
                const res = await fetch(`${BASE_URL}data/bloodbank`,
                {
                    method : "get",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                });
    
            const message = await res.json();
            if(!res.ok){
                throw new Error(message);
            }
            toast.success(message);
            // console.log(message);
            setdata(message.data);
            } catch (error) {
                console.log(error);
                throw new Error(error);
            }
        }

    useEffect(() => {
        fetchData();
    });
    // const TabsData = [
    //     {
    //         label: "Blood Bank",
    //         value: "banks",
    //     }, {
    //         label: "Donars List",
    //         value: "donars",
    //     }
    // ];

  return (
    <div>
        <img className="object-cover h-40 w-screen" alt="hero" src={bbank}/>
        <br/>
            <Tabs value="banks" className="max-w-[40rem] block mx-auto text-center sm:w-full">
                    <TabsHeader
                        className="bg-transparent"
                        indicatorProps={{
                        className: "bg-gray-900/10 shadow-none !text-gray-900"
                    }}> 
                            <Link to="/blood-bank">
                            <Tab className='w-40'  value="banks">
                                BloodBank
                            </Tab>
                            </Link>
                            
                            <Link to="/blood-donars">
                            <Tab className='w-40'  value="donars">
                                Donars List
                            </Tab>
                            </Link>
                            
                    </TabsHeader>
                </Tabs>
        <section className="text-gray-600 body-font">
       <h2 className="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><b>Blood Bank</b></h2>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">"Life Saver Depot: <br/> A Beacon of Hope at the Blood Bank"</h1>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">" Blood bank is a crucial institution dedicated to collecting, testing, storing, and distributing blood and blood products to meet the medical needs of patients. These facilities play a vital role in healthcare by ensuring a stable and safe blood supply for various medical procedures, surgeries, and emergencies."</p>
                </div>
                <div className="flex flex-wrap -m-4">
                {
                    data.map((elements ,index)=>{
                        return(
                            <Link key={index} to="/bank-info" state={elements} className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-50 object-cover object-center mb-6" style={{width : "250px"} } src={elements.thumbnail} alt="content"/>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{elements.name}</h3>
                                <p className="leading-relaxed text-base">{elements.address.slice(0,50)}...</p> 
                                {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">&#9733; {elements.rating}</h2> */}
                                {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
                            </div>
                </Link>
                        )
                    })
                }
                </div>
            </div>
    </section>
        </div>
  )
}
