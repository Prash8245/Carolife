import React, {useState, useEffect, useContext} from 'react';
import Avatar from 'react-avatar';
// import {Link} from 'react-router-dom';
import {BASE_URL} from '../../../../config';
import {toast} from 'react-toastify';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Badge} from "@material-tailwind/react";
import {UserData} from '../../../../Context/userDataContext';
import person from '../../../../Assets/dummy-doctor.jpg';
import { commanGet, commanPost } from '../../../../Context/CommanMethods';

export default function AdditionalDetails(propsData) {
    // console.log(propsData.data)
    const userD = useContext(UserData);
    const [doctors,
        setdoctors] = useState([])
    const [open,
        setOpen] = React.useState(false);

    const [doctor_id,
        setId] = useState("");

    const [timeSlot,
        setSlot] = useState([]);

    const handleOpen = () => setOpen(!open);

    async function fetchData() {
        try {
            // console.log(dataBody)
            // const res = await fetch(`${BASE_URL}doctor/DocGet`, {
            //     method: "get",
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // });

            const res = await commanGet('doctor/DocGet');

            const message = await res.json();
            if (!res.ok) {
                throw new Error(message);
            }
            toast.success(message);
            // console.log(message);
            setdoctors(message.data);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    const format = function (input) {
        var pattern = /(\d{4})-(\d{2})-(\d{2})/;
        if (!input || !input.match(pattern)) {
            return null;
        }
        return input.replace(pattern, '$3-$2-$1');
    };

    const AppointmentScheduling = async() => {
        let dataBody = {
            doctor: doctor_id,
            user: userD.userData,
            hospital: propsData.data._id ,
            purpose: document
                .getElementById("purpose")
                .value,
            appointmentDate: format(document.getElementById("date").value.toString()),
            timeSlot: document
                .querySelector('input[type="radio"][name="time"]:checked')
                .value
        }
        try {
            // const res = await fetch(`${BASE_URL}appointment/appoint`, {
            //     method: "post",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(dataBody)
            // });
            var url = `appointment/appoint`;
            const res = await commanPost(url,dataBody);
    
            const message = await res.json();
            if (!res.ok) {
                throw new Error(message);
            }
            toast.success(message);
            console.log(message);
            // alert(message.messgae);
            userD.setopen(true);
            await setTimeout(()=>{
                userD.setopen(false);
            },1000)
        } catch (error) {
            throw new error("Some Internal Error");
        }
        
    }

    useEffect(() => {
        fetchData()
    },[]);

    return (
        <div className='bg-gray-100'>
            <section className='doctors'>
                <h2 className="text-4xl text-center font-serif mb-4">Doctors</h2>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -mx-4 -my-8">
                            {doctors.map((elements, index) => {
                                if (propsData.data.doctors.includes(elements._id)) {
                                    return (
                                        <div key={index} className="py-8 px-4 lg:w-1/3">
                                            <div className="h-full flex items-start">
                                                <div
                                                    className="w-12 flex-shrink-0 flex flex-col text-left sm:text-center leading-none">
                                                    {/* <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span> */}
                                                    <span
                                                        className="font-medium my-5 text-lg text-gray-800 title-font leading-none">
                                                            <Badge placement='bottom-end' color={elements.available?"green":"red"}>
                                                            <Avatar round={true} size='50px' src={person}/>
                                                            </Badge>
                                                            
                                                    </span>
                                                </div>
                                                <div className="flex-grow pl-6 text-left">
                                                    <h2
                                                        className="tracking-widest text-xs  title-font font-medium text-indigo-500 mb-1">{elements.specialization}</h2>
                                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{elements.name}</h1>
                                                    <p className="leading-relaxed mb-5">Qualification : {elements
                                                            .qualifications
                                                            .map((qualify, index) => {
                                                                return <span key={index}>{qualify}
                                                                    &nbsp;,</span>
                                                            })
}
                                                    </p>
                                                    <div style={{display : `${userD.userData ? "block":"none"}`}}>
                                                    <button
                                                        to='/appointment'
                                                        onClick={() => {
                                                        setId(elements._id);
                                                        setSlot(elements.timeSlots);
                                                        handleOpen();
                                                    }}
                                                        className="flex mr-5 mt-5 w-2/3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Appointment Scheduling</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })
}
                        </div>
                    </div>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Appointment Scheduling</DialogHeader>
                        <DialogBody>
                            <label className='p-1 my-4'>Purpose of Visit :&nbsp;
                                <input className='p-1' id='purpose' type='text' placeholder='Type here ...'/></label><br/>
                            <label className='p-1 my-4'>
                                Appointment Date : &nbsp;
                                <input
                                    id="date"
                                    min={new Date()
                                    .toISOString()
                                    .split('T')[0]}
                                    type='date'/></label><br/>
                            <label className='p-1 my-4'>
                                Time Slot :
                                <br/>
                                <label className='p1 mx-4'>
                                    <input type='radio' name='time' id='slot' value={timeSlot[0]}/> {timeSlot[0]}
                                </label>
                                <label className='p1 mx-4'>
                                    <input type='radio' name='time' id='slot' value={timeSlot[1]}/> {timeSlot[1]}
                                </label>
                                <label className='p1 mx-4'>
                                    <input type='radio' name='time' id='slot' value={timeSlot[2]}/> {timeSlot[2]}
                                </label>

                            </label><br/>
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                <span>Cancel</span>
                            </Button>
                            <Button
                                variant="gradient"
                                color="green"
                                onClick={(event) => {
                                event.preventDefault();
                                AppointmentScheduling();
                                handleOpen();
                            }}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </section>
            </section>
            <section className="text-gray-600 body-font Gallery">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Photo Gallery</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our hospital's
                            vibrant photo gallery, capturing moments of care, compassion, and medical
                            excellence. Browse through images that showcase our state-of-the-art facilities,
                            dedicated healthcare professionals, and the warm environment that defines our
                            commitment to your well-being. selfies heirloom.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {propsData
                            .data
                            .images
                            .map((images) => {
                                return (
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                            <img
                                                alt="gallery"
                                                className="absolute inset-0 w-full h-full object-cover object-center"
                                                src={images}/>
                                            <div
                                                className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                                <h2
                                                    className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Carolife</h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Life Caring Solution</h1>
                                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha
                                                    leggings jianbing microdosing tousled waistcoat.</p>
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
    );
}
