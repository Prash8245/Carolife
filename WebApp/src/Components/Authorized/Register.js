import React, { useState ,useContext} from 'react';
import './Page.css';
import {toast} from "react-toastify";

import user from '../../Assets/Register/person.png';
import email from '../../Assets/Register/email.png';
import password from '../../Assets/Register/password.png';
import { useNavigate} from 'react-router-dom';
import {BASE_URL} from "../../config.js";
import { UserData } from '../../Context/userDataContext.js';



const Register = () => {
    const [action,setAction] = useState("Login");
    const navigate = useNavigate();
    const userD = useContext(UserData);

    const signUpHanderler = async (event)=>{
        // event.preventDefault();
        const signUpData = {
            name: document.getElementById('name').value,
            email :document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value
        }
        console.log(signUpData);
    
        try {
            const res = await fetch(`${BASE_URL}auth/register/`,
            {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(signUpData)
            })
    
            const message = await res.json();
            if(!res.ok){
                throw new Error(message);
            }
            toast.success(message);
            console.log(message);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    
    const loginHandler = async (event)=>{
        // event.preventDefault();
        const loginData = {
            email :document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        console.log(loginData);

        try {
            const res = await fetch(`${BASE_URL}auth/login/`,
            {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(loginData)
            })
    
            const message = await res.json();
            if(!res.ok){
                alert(message.message)
                throw new Error(message);
            }
            toast.success(message);
            console.log(message);
            // setdata(message.data);
            userD.SetuserData(String(message.data._id));
            console.log(userD.userData);
            navigate('/home' )
        } catch (error) {
            console.log(error);
        }
    }
    
    

  return (
    <div className="container1 ">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name' id='name'/>
            </div>}
            {/* <div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name'/>
            </div> */}
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email Id' id='email'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password' id='password'/>
            </div>
            {action==="Login"?<div></div>:<div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Phone' id='phone'/>
            </div>}
        </div>
        {action === "Sign Up"?<div></div>:<div className="forgot-pass">Lost Password? <span>Click Here!</span></div>}
        <div className='log'>
            <div to=""
                onClick={()=>{
                    if(action === 'Login'){
                        loginHandler();
                    }else{
                        signUpHanderler(); 
                    }
                }}
                
            >{action}</div>
        </div>
        <div className="submit-box">
            <div  className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div  className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
)
}

export default Register
