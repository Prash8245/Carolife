import React, { useState } from 'react';
import './Page.css';

import user from '../../Assets/Register/person.png';
import email from '../../Assets/Register/email.png';
import password from '../../Assets/Register/password.png';

const Register = () => {
    const [action,setAction] = useState("Login");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            {/* <div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name'/>
            </div> */}
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action === "Sign Up"?<div></div>:<div className="forgot-pass">Lost Password? <span>Click Here!</span></div>}
        <div className='log'>
            <button >{action}</button>
        </div>
        <div className="submit-box">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Register
