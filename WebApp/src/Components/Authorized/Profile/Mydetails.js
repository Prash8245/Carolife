import React, {useContext, useState, useEffect} from 'react';
import {UserData} from '../../../Context/userDataContext';
import {BASE_URL} from '../../../config';
import {toast} from "react-toastify";
import Navbar from '../Services/Hospitals/Navbar';
import {Link ,useNavigate} from 'react-router-dom';
import { commanGet } from '../../../Context/CommanMethods';

export default function Mydetails() {
    const userD = useContext(UserData);
    const [name,
        setname] = useState("");
    const [email,
        setEmail] = useState("");
    const [phone,
        setphone] = useState("");
    const [dob,
        setdob] = useState("N/A");
    const [blood,
        setblood] = useState("N/A");
    const [gender,
        setgender] = useState("N/A");
    const [doctors, setdoctors] = useState([]);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    const navigate = useNavigate();

    const dataFetch = async() => {
        try {
            // console.log(userD.userData);
            //const res = await fetch(`${BASE_URL}auth/current/${userD.userData}`, {method: "get"});
            const url = "auth/current/" + sessionStorage.getItem("Id");
            console.log(url);
            console.log(sessionStorage.getItem("Id").toString());
            const res = await commanGet(url);

            const message = await res.json();
            if (!res.ok) { 
                setTimeout(()=>{
                    window.location.href = "/login";
                },5000)
                
                return null
                //navigate('/login');
                //throw new Error(message);
            }
            toast.success(message);
            // console.log(message);
            setname(message.data.name);
            setEmail(message.data.email);
            setphone(String(message.data.phone));
            message.data.dateOfBirth
                ? setdob(message.data.dateOfBirth)
                : setdob("N/A");
            message.data.bloodType
                ? setblood(message.data.bloodType)
                : setblood("N/A");
                // console.log(message.data.bloodType);
            // console.log(blood);
            // setblood(message.data.bloodGroup);
            message.data.dob
                ? setdob(message.data.dob)
                : setdob("N/A");
            message.data.gender
                ? setgender(message.data.gender)
                : setgender("N/A");

                // const appoint = await fetch(`${BASE_URL}appointment/getAll/${userD.userData}`,
                // {
                //     method : "get",
                //     headers : {
                //         "Content-Type" : "application/json"
                //     }
                // })

                const appoint = await commanGet("appointment/getAll/"+userD.userData);
        
                const appointdata = await appoint.json();
                if(!appoint.ok){
                    throw new Error(appointdata);
                }
                toast.success(appointdata);
                // console.log(appointdata);
                userD.setappointment(appointdata.data);

                const doctorData = await commanGet("doctor/DocGet");

            // const doctorData = await fetch(`${BASE_URL}doctor/DocGet`, {
            //     method: "get",
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // });

            const result = await doctorData.json();
            if (!doctorData.ok) {
                throw new Error(result);
            }
            toast.success(result);
            setdoctors(result.data)
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(() => {
        dataFetch();
    },[]);

    return (
        <div>
            <Navbar/>
            <div className='bg-gray-100 min-h-screen p-10'>
                <section className="mydetails container px-10 py-4 mx-auto">
                    <div className="px-4 sm:px-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">User Information</h1>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and appointments.</p>
                    </div>
                    <div className="mt-6 border-t border-slate-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Full name:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{name}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Email address:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Phone no:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{phone}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">DOB</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(dob).toLocaleDateString()}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Gender</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{gender}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Blood group</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{blood}</dd>
                            </div>
                        </dl>
                        <Link
                            to='/update'
                            state={{name: name,
                                    dob:dob,
                                    blood:blood,
                                    gender:gender}
                                }
                            className='text-gray-700 bg-[#ECFFDC] border-0 py-1 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>Edit</Link>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-10 py-4 mx-auto">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Appointments History</h1>
                        </div>
                        <div className="flex flex-wrap -mx-4 -my-8">
                            {userD
                                .appointments
                                .map((element,index) => {
                                    return (
                                        <div key={index} className="py-8 px-4 lg:w-1/3">
                                            <div className="h-full flex items-start">
                                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{months[parseInt(element.appointmentDate.split("-")[1]) -1]}</span>
                                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{element.appointmentDate.split("-")[0]}</span>
                                                </div>
                                                <div className="flex-grow pl-6">
                                                    <h2
                                                        className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{element.status}</h2>
                                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{element.purpose}</h1>
                                                    <div className="inline-flex items-center">

                                                        <span className="flex-grow flex flex-col pl-3">
                                                            <span className="title-font font-medium text-gray-900">{
                                                                doctors.map((data,index)=>{
                                                                    if(data._id === element.doctor ){
                                                                        return (data.name)
                                                                    }
                                                                    else
                                                                        return null;
                                                                })
                                                            }</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </div>
        </div>

    )
}
