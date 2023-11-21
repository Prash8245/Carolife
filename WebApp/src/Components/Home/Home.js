import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h1 className='columns-1 text-center font-serif text-4xl font-semibold p-4' >Welcome to Carolife</h1>
        <h3 className='text-center font-serif text-xl font-semibold p-4'>Life Caring solution</h3>
        <Link to='/' className='w-60 text-lg sm:w-96 sm:text-2xl font-semibold m-5 bg-rose-600 hover:border-rose-600 block mx-auto mt-32 p-10 border-2 rounded-full'>
          Emergency Service
        </Link>
        <Link to='/login' className='w-60 text-lg sm:w-96 sm:text-2xl font-semibold m-5 bg-fuchsia-200 hover:border-slate-400 block mx-auto  p-10 border-2 rounded-full'>
          Authorized Service
        </Link>
    </div>
  );
}
