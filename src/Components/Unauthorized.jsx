import React from 'react';
import error from '../assets/404.png'

const Unauthorized = () => {
    return (
        <div className='flex items-center justify-center h-screen px-[10px]'>
            <div>
                <div className='flex items-center justify-center'>
                <img src={error} alt="error" className='w-[300px]' />
                </div>
                <h1 className='lg:text-[35px] xs:text-[25px] md:text-[30px] font-Mulish text-center font-medium mt-4'>Oops, looks like you got lost.</h1>
                <p className='lg:text-[22px] xs:text-[18px] md:text-[20px] font-Mulish font-normal text-center mt-1'>You do not have access to this page.</p>
            </div>
        </div>
    );
};

export default Unauthorized;