import React, { useState ,useContext} from 'react';
import './Page.css';
import {toast} from "react-toastify";
import PulseLoader from 'react-spinners/PulseLoader';

import user from '../../Assets/Register/person.png';
import email from '../../Assets/Register/email.png';
import password from '../../Assets/Register/password.png';
import { useNavigate} from 'react-router-dom';
//import {BASE_URL} from "../../config.js";
import { UserData } from '../../Context/userDataContext.js';
import { commanPost, onLogin } from '../../Context/CommanMethods.js';



const Register = () => {
    const [action,setAction] = useState("Login");
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
            const res = await commanPost("auth/register/",signUpData);
            const message = await res.json();

            if(!res.ok){
                setLoading(false);
                throw new Error(message);
            }

            setLoading(false);
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
        //console.log(loginData);

        try {
            setLoading(true);
            const res = await onLogin("auth/login/" , loginData)
            console.log()
            const message = await res.json();
            if(!res.ok){
                alert(message.message)
                setLoading(false);
                throw new Error(message);
            }

            setLoading(false);
            toast.success(message);
            // console.log(message);
             console.log(message.data._id)
            sessionStorage.setItem("Id",message.data._id);
            sessionStorage.setItem("accessToken",message.accessToken);
            console.log(sessionStorage.getItem("Id"));
            // setdata(message.data);
            userD.SetuserData(String(message.data._id));
            console.log(userD.userData);
            navigate('/home' )
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
    
    

  return (
    <div className="container1 ">
        <div style={{ position:'fixed',left:'50%', top:'50%' }}>
            {loading ? (
                <PulseLoader loading={loading} size={15} color={"#123abc"} />
            ) : null }
            </div>
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
