import React from 'react';
import Content from '../../Authorized/Services/Hospitals/Content';
import Emer from './Emer';

export default function Emergency() {
  return (
    <div className='bg-gray-100'>
        <Emer />
        <Content />
    </div>
  );
}
