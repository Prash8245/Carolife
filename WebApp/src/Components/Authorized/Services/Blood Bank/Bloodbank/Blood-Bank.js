import React from 'react';
import Navbar from '../../Hospitals/Navbar';
// import Content from './Content';


export default function BloodBank(props) {
    return (
        <div className='bg-gray-100'>
            <Navbar/>
            {/* <Content/> */}
            {props.comp}
        </div>
    );
}
