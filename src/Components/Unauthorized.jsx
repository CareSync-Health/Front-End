import React from 'react';
import error from '../assets/404.png'

const Unauthorized = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <div className='flex items-center justify-center'>
                <img src={error} alt="error" className='w-[300px]' />
                </div>
                <h1 className='text-[35px] font-Mulish text-center font-medium mt-4'>Oops, looks like you got lost.</h1>
                <p className='text-[22px] font-Mulish font-normal text-center mt-1'>You do not have access to this page.</p>
            </div>
        </div>
    );
};

export default Unauthorized;