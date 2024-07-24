import React, { useState } from 'react'
import vector from '../../assets/Group 2.png'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import Man from '../../assets/Man-Figure.png'
import Woman from '../../assets/Girl-Figure.png'
import { FaArrowLeft } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaAnglesLeft } from "react-icons/fa6";




const BmiCalculator = ({setShowBmi}) => {

    const [gender, setGender] = useState('man'); // Initial state can be 'man' or 'woman'


  return (
    <div className='bg-[#303030] lg:w-[480px] xs:w-full py-[20px] px-[10px] absolute left-0  animate-gb-popup-slide-zoom-left'>
    <div className='flex items-center justify-between'>
        <h1 className='text-[20px] font-normal font-Mulish text-[#fff] flex items-center gap-[5px]' onClick={() => setShowBmi(false)}> <FaAnglesLeft /> BMI Calculator</h1>
        <select className='border border-[#CACACA] border-solid py-[6px] px-[10px] rounded-[10px] text-[#CACACA] text-[16px] font-normal font-Mulish bg-[#303030]'>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
        </select>
    </div>
    <div className='mt-[2.3rem] flex items-center gap-[20px]'>
        <div>
            <div className='bg-[#F8DEBD] w-[130px] rounded-[12px] py-[15px] ps-[15px]'>
                <img src={vector} className='ms-[]' />
                <h2 className='flex items-center gap-[18px] mt-2'>
                    <span className='text-[#272927] text-[14px] font-medium font-Mulish'>Height</span>
                    <span className='text-[#272927] text-[14px] font-medium font-Mulish'>170 cm</span>
                </h2>
            </div>
            <div className='bg-[#D0FBFF] w-[130px] rounded-[12px] py-[15px] ps-[15px] mt-[1.5rem]'>
                <img src={vector} className='ms-[]' />
                <h2 className='flex items-center gap-[18px] mt-2'>
                    <span className='text-[#272927] text-[14px] font-medium font-Mulish'>Weight</span>
                    <span className='text-[#272927] text-[14px] font-medium font-Mulish'>72 kg</span>
                </h2>
            </div>
        </div>
        <div className='bg-[#4A4949] w-[250px] h-[184px] rounded-[12px] px-[15px] py-[15px]'>
            <h1 className='text-[#fff] text-[14px] font-normal font-Mulish'>Body Mass Index (BMI)</h1>
            <span className='flex items-center justify-between mt-[1rem]'>
                <h2 className='text-[#fff] text-[24px] font-normal font-Mulish'>24.9</h2>
                <h2 className='bg-[#D6FFDD] py-[5px] px-[10px] w-[101px] rounded-[8px] text-[#000] text-[12px] font-normal font-Mulish text-center'>You’re Healthy</h2>
            </span>

        </div>
    </div>
        <hr className='w-full h-[1px] bg-[#4F4E4E] mt-[3rem]' />
        <div className='mt-[1rem] flex items-center justify-between'>
            <div>
                <h1 className='text-[#fff] text-[22px] font-normal font-Mulish leading-[27px]'>Body Measurements</h1>
                <h2 className='text-[#CACACA] text-[14px] font-bold font-Mulish leading-[20px] mt-2'>Last checked 2 Days Ago</h2>
                <h2 className='bg-[#5E5E5E] w-[211px] py-[10px] px-[10px] rounded-[8px] text-[#fff] text-[14px] font-normal font-Mulish leading-[17px] mt-4'>Inverted Triangle Body Shape</h2>
                <div className='mt-[15rem]'>
                    <div className='bg-[#fff] w-[130px] text-center rounded-[12px] py-[10px]'>
                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>Chest (in)</h1>
                        <div className="flex gap-[0.5rem] ms-[2rem] mt-3">
                        <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px]'>44.5</h2>
                        <BiUpArrowAlt className='mt-[4px] text-[25px] fill-[#E95D5C]' />
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[130px] text-center rounded-[12px] py-[10px] mt-[1.5rem]'>
                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>Waist (in)</h1>
                        <div className="flex gap-[0.5rem] ms-[2.5rem] mt-3">
                        <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px]'>34</h2>
                        <BiDownArrowAlt className='mt-[4px] text-[25px] fill-[#90DF9E]' />
                        </div>
                    </div>
                    <div className='bg-[#fff] w-[130px] text-center rounded-[12px] py-[10px] mt-[1.5rem]'>
                        <h1 className='text-[15px] text-[#5F5F5F] font-Mulish font-bold leading-[20px]'>Hip (in)</h1>
                        <div className="flex gap-[0.5rem] ms-[2rem] mt-3">
                        <h2 className='text-[20px] font-Mulish font-normal leading-[24px] mt-[5px]'>42.5</h2>
                        <BiDownArrowAlt className='mt-[4px] text-[25px] fill-[#90DF9E]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mt-[1rem]'> */}
                <img src={gender === 'man' ? Man : Woman} alt={gender === 'man' ? 'Man' : 'Woman'} className='mt-[10rem] ms-[-6rem]' />
            {/* </div> */}
        </div>
</div>
  )
}

export default BmiCalculator