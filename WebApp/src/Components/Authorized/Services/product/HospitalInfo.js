import React from 'react';
import Product from './Product';
import AddtionalDetails from './AddtionalDetails';
import {useLocation} from 'react-router-dom';


export default function HospitalInfo() {
    const location = useLocation();
    const propsData = location.state;

    return (
        <div> 
            <Product data={propsData}/>
            <AddtionalDetails data={propsData}/>
        </div>
    );
}
