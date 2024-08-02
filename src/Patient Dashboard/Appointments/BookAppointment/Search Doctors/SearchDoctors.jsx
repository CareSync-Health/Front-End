import React, { useCallback, useEffect, useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Navbar from '../../../Components/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Ellipse from '../../../../assets/Profile.jpeg'
import { useSelector } from 'react-redux';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineBusinessCenter, MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';


const SearchDoctors = () => {
  const patient = useSelector((state) => state.patientAuth.patient)

  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCount, setVisibleCount] = useState(6); // Start with 5 profiles visible

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  
  const data = [
    {
      id: 1,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 2,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 3,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 4,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 5,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 6,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 7,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 8,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 9,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    },
    {
      id: 10,
      image: Ellipse,
      title: 'Dr.',
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      profession: 'Dermatologist',
      experience: '5 years',
      location: 'Department of Medicine UCH, Ibadan, Oyo, 200221, Nigeria',
      description: 'Dr. Shakirat Gold-Olufadi is a consultant Physician and dermatologist at the University College Hospital in ibadan, Oyo state, Nigeria. She has been practicing for over 20 years and has a vast experience in treating various skin conditions. She is well-known for her patient-centric approach and dedication to continuous learning.'
    }
  ]

  const loadMoreItems = useCallback(() => {
    if (inView && visibleCount < data.length) {
      setVisibleCount((prevCount) => prevCount + 6); // Increase by 5 each time
    }
  }, [inView, visibleCount, data.length]);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems, inView]);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar />
        <div className='mt-[3rem] xs:px-[10px] lg:px-[30px]'>
          <form>
            <input type='search' placeholder='Search for a doctor' className='border border-[#eee] rounded-[100px] py-[7px] px-4 lg:w-[600px] xs:w-full bg-[#fff] shadow-sm outline-none' />
            <div className='flex items-center justify-between mt-[1.5rem]'>
              <button className='flex items-center gap-[1.5rem] bg-[#22cfeeb0] p-[7px] text-[14px] text-[#fff] font-normal font-Mulish rounded-[10px]'>Filter Result <IoIosArrowForward /></button>
              <Link to='' className='text-[15px] text-[#22D1EE] font-Mulish font-medium'>See all</Link>
            </div>
          </form>
          <div className='flex items-start flex-wrap justify-between gap-[2rem] mt-[2rem] mb-[4rem]'>
            {data.slice(0, visibleCount).map((data) => (
              <div className='bg-[#fff] shadow-lg p-5 lg:w-[380px] xs:w-full'>
              <div className='flex items-start gap-[2.5rem]'>
                <img src={data.image} className='w-[70px] rounded-[100px]' />
                <div>
                  <h2 className='text-[16px] text-[#22D1EE] font-bold font-Mulish'>{data.title} {data.firstName} {data.lastName}</h2>
                  <h2 className='text-[13px] font-normal font-Mulish'>{data.profession}</h2>
                  <h2 className='flex items-start gap-[5px] text-[13px] font-normal font-Mulish mt-4'><MdOutlineBusinessCenter className='text-[19px] text-[#22D1EE]' />  Experience: {data.experience}</h2>
                  <h2 className='flex items-start gap-[5px] text-[13px] font-normal font-Mulish mt-4'><SlLocationPin className='text-[20px]' /> {data.location}</h2>
                </div>
              </div>
              <div className='mt-[2.5rem] cursor-pointer' onClick={() => toggleDescription(data.id)}>
                <p className='text-[13px] font-normal font-Mulish'>{expandedDescriptions[data.id] ? data.description : `${data.description.substring(0, 100)}...`}</p>
                <p className='text-[13px] text-[#22D1EE] font-bold font-Mulish'>{expandedDescriptions[data.id] ? 'View less-' : 'View more+'}</p>
              </div>
              <center>
              <button className='flex items-center gap-[1rem] text-[#fff] text-[16px] font-normal font-Mulish bg-[#22D1EE] w-full py-[7px] lg:px-[115px] xs:px-[100px] mt-[2.5rem] text-center rounded-[7px]'>book now <FaArrowRightLong className='mt-1' /></button>
              </center>
            </div>
            ))}
          </div>
          <div ref={ref} />
        </div>
      </div>
    </div>
  )
}

export default SearchDoctors