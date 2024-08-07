import React, { useCallback, useEffect, useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Navbar from '../../../Components/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Ellipse from '../../../../assets/Profile.jpeg'
import { useSelector } from 'react-redux';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import CareSync from '../../../../assets/CareSync.png'
import { FaTimes } from 'react-icons/fa';


const SearchDoctors = () => {
  const patient = useSelector((state) => state.patientAuth.patient)

  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCount, setVisibleCount] = useState(6); // Start with 5 profiles visible
  const [showFilter, setShowFilter] = useState(false)

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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
      image: Ellipse ? Ellipse : CareSync,
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
              <h2 className='flex items-center gap-[1.5rem] bg-[#22cfeeb0] p-[7px] text-[14px] text-[#fff] font-normal font-Mulish rounded-[10px] cursor-pointer' onClick={() => setShowFilter(true)}>Filter Results <IoIosArrowForward /></h2>
              <Link to='' className='text-[15px] text-[#22D1EE] font-Mulish font-medium'>See all</Link>
            </div>
            {showFilter ? (
              <div className='absolute lg:left-[16rem] xs:left-[-2px] lg:top-[12rem] xs:top-0 bg-[#fff] py-3 px-3 lg:w-[400px] xs:h-screen lg:h-[65vh] shadow-lg rounded-[10px]'>
                <FaTimes className='float-end lg:text-[20px] xs:text-[22px] cursor-pointer lg:mt-0 xs:mt-[1rem]' onClick={() => setShowFilter(false)} />
                <form className='lg:mt-[2.5rem] xs:mt-[4rem] mb-[1rem]'>
                  <input type='text' placeholder='State' className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none' />
                  <input type='text' placeholder='City' className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]' />
                  <select className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'>
                    <option>Specialty</option>
                    <option>Dentist</option>
                    <option>Care Giver</option>
                    <option>Physoclogic</option>
                    <option>Dentist</option>
                  </select>
                  <select className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <button className='bg-[#22D1EE] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-[2rem] xs:mt-[4rem]'>Apply Filter</button>
                  <button className='bg-[#22cfee60] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-3 xs:mt-[1rem]'>Clear Filter</button>
                </form>
              </div>
            ) : null}
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
                  <button className='text-[#fff] text-[16px] font-normal font-Mulish bg-[#22D1EE] w-full py-[7px] lg:px-[115px] xs:px-[100px] mt-[2.5rem] text-center rounded-[7px]'><Link to='/doctorInfo' className='flex items-center gap-[1rem]'>book now <FaArrowRightLong className='mt-1' /></Link></button>
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