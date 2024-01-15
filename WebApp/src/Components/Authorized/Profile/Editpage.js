import React, { useContext } from 'react';
import NavBar from '../../Authorized/Services/Hospitals/Navbar';
import {toast} from 'react-toastify';
import { BASE_URL } from '../../../config';
import { UserData } from '../../../Context/userDataContext';
import { useLocation ,useNavigate} from 'react-router-dom';

export default function Editpage() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const userD = useContext(UserData);
    const handleSubmit = async()=>{
        const updateData = {
            name: document.getElementById('name').value !== '' ? document.getElementById('name').value : null,
            dob: document.getElementById('dob').value !== '' ? document.getElementById('dob').value : data.dob,
            gender: document.querySelector('input[type="radio"][name="radio1"]:checked')? document.querySelector('input[type="radio"][name="radio1"]:checked').value : data.gender ,
            bloodType: document.getElementById('blood').value !== 'Select'? document.getElementById('blood').value : data.blood
        }
        console.log(updateData);
        try {
            const res = await fetch(`${BASE_URL}auth/update/${userD.userData}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData)
            });
    
            const message = await res.json();
            if (!res.ok) {
                throw new Error(message);
            }
            toast.success(message);
            console.log(message);
            navigate('/profile');
        } catch (error) {
            throw new Error(error);
        }
        console.log(updateData);
    }
    return (
        <div>
            <NavBar/>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] sm:max-w-[750px] p-10 bg-white">
                        <div className="-mx-3">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        Name :
                                        <input
                                            type="text"
                                            id='name'
                                            value={data.name}
                                            placeholder='Enter your name'
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                    </label>

                                </div>
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                                        DOB :
                                        <input
                                            type="date"
                                            name="date"
                                            id="dob"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                    Gender
                                </label>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center">
                                        <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">
                                            <input
                                                type="radio"
                                                name="radio1"
                                                id="radioButton1"
                                                value="male"
                                                className="h-5 w-5"/>
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                                            <input
                                                type="radio"
                                                name="radio1"
                                                id="radioButton2"
                                                value="female"
                                                className="h-5 w-5"/>
                                            Female
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                                            <input
                                                type="radio"
                                                name="radio1"
                                                id="radioButton2"
                                                value="others"
                                                className="h-5 w-5"/>
                                            Others
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Blood group</label>
                                <select id='blood' className="bg-gray-100 px-8 py-3 rounded-lg cursor-pointer shadow">
                                <option value={null}>Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="hover:shadow-form w-full rounded-md bg-[#7FFFD4] py-3 px-8 text-center text-base font-semibold  hover:bg-gray-300  text-gray-700 outline-none">
                                Update
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}
