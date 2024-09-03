import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../Components/Sidebar';
import Navbar from '../../../Components/Navbar';
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { getAllDoctors } from '@/Redux/Actions/PatientActions';
import caresync from '../../../../assets/CareSync.png';
import avatar from '../../../../assets/avatar.png';

const SearchDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doctors = [] } = useSelector((state) => state.getAllDoctors);

  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [showFilter, setShowFilter] = useState(false);
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const professions = [
    'Allergist',
    'Anesthesiologist',
    'Behavioral Health',
    'Cardiologist',
    'Certified Covid Test Provider',
    'Clinical Psychologist',
    'Counselor',
    'Dentist',
    'Dermatologist',
    'Endochnologist',
    'Gastroenterologist',
    'General Practice',
    'Gynecologist',
    'Health Care Navigator',
    'Hematologist',
    'Home Care Nurse',
    'Immunologist',
    'Internal Medicine',
    'Internist',
    'Lab Technician',
    'Medical Assistant',
    'Mental Health Therapist',
    'Naturopath',
    'Naturopathic Doctor',
    'Nephrologist',
    'Neurologist',
    'Neurosurgeon',
    'Nurse Practitioner',
    'Obstetrician',
    'Obstetrician/Gynecologist',
    'Occupational Therapist',
    'Oncologist',
    'Ophthalmologist',
    'Optometrist',
    'Osteopath',
    'Otolaryngologist',
    'Otorhinolaryngologist',
    'Outreach Health Provider',
    'Pathologist',
    'Pediatrician',
    'Pharmacist',
    'Phychotherapist',
    'Physiatrist',
    'Physical Therapist',
    'Physician',
    'Physician Assistant',
    'Physiotherapist',
    'Podiatrist',
    'Psychiatrist',
    'Psychologist',
    'Pulmonologist',
    'Radiologist',
    'Receptionist',
    'Registered Dietitian',
    'Registered Nurse',
    'Rheumatologist',
    'Registered Dietitian',
    'Registered Nurse',
    'Rheumatologist',
    'Speech Language Pathologist',
    'Surgeon',
    'Urologist',
    'Wellness Coach',
  ]

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  
  const filteredDoctors = doctors
  .filter(doctor => {
    // Normalize and trim search query
    const normalizedSearchQuery = searchQuery.trim().toLowerCase();

    // Combine first and last name for full name search
    const doctorFullName = `${doctor.firstName || ''} ${doctor.lastName || ''}`.toLowerCase();

    // Check if the full name or individual name parts match the search query
    const matchesName = doctorFullName.includes(normalizedSearchQuery) ||
                        (doctor.firstName?.toLowerCase().includes(normalizedSearchQuery) ||
                        doctor.lastName?.toLowerCase().includes(normalizedSearchQuery));
                        
    const matchesProfession = (doctor.profession?.toLowerCase() || '').includes(specialtyFilter.toLowerCase());
    const matchesGender = (doctor.gender?.toLowerCase() || '').includes(genderFilter.toLowerCase());
    const matchesState = (doctor.state?.toLowerCase() || '').includes(stateFilter.toLowerCase());
    const matchesCity = (doctor.city?.toLowerCase() || '').includes(cityFilter.toLowerCase());

    return (
      (searchQuery ? matchesName : true) &&
      (specialtyFilter ? matchesProfession : true) &&
      (genderFilter ? matchesGender : true) &&
      (stateFilter ? matchesState : true) &&
      (cityFilter ? matchesCity : true)
    );
  });


    useEffect(() => {
      if (inView && visibleCount < filteredDoctors.length) {
        setVisibleCount((prevCount) => prevCount + 6);
      }
    }, [inView, visibleCount, filteredDoctors.length]);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-screen overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar />
        <div className='mt-[3rem] xs:px-[10px] lg:px-[30px]'>
          <form>
            <div>
              <input
                type='text'
                placeholder='Search for a doctor'
                className='border border-[#eee] rounded-[100px] py-[7px] px-4 lg:w-[600px] xs:w-full bg-[#fff] shadow-sm outline-none'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between mt-[1.5rem]'>
              <h2
                className='flex items-center gap-[1.5rem] bg-[#22cfeeb0] p-[7px] text-[14px] text-[#fff] font-normal font-Mulish rounded-[10px] cursor-pointer'
                onClick={() => setShowFilter(true)}
              >
                Filter Results <IoIosArrowForward />
              </h2>
              <Link to='' className='text-[15px] text-[#22D1EE] font-Mulish font-medium'>See all</Link>
            </div>
            {showFilter && (
              <div className='absolute lg:left-[16rem] xs:left-[-2px] lg:top-[12rem] xs:top-0 bg-[#fff] py-3 px-3 lg:w-[400px] xs:h-screen lg:h-[65vh] shadow-lg rounded-[10px]'>
                <FaTimes
                  className='float-end lg:text-[20px] xs:text-[22px] cursor-pointer lg:mt-0 xs:mt-[1rem]'
                  onClick={() => setShowFilter(false)}
                />
                <form className='lg:mt-[2.5rem] xs:mt-[4rem] mb-[1rem]'>
                  <input
                    type='text'
                    placeholder='State'
                    className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none'
                    value={stateFilter}
                    onChange={(e) => setStateFilter(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='City'
                    className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                  />
                  <select
                    className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                  >
                    {professions.map(profess => (
                      <option key={profess} value={profess}>{profess}</option>
                    ))}
                    {/* <option value=''>Specialty</option>
                    <option value='Dentist'>Dentist</option>
                    <option value='Care Giver'>Care Giver</option>
                    <option value='Psychologist'>Psychologist</option> */}
                  </select>
                  <select
                    className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option value=''>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                  <button
                    className='bg-[#22D1EE] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-[2rem] xs:mt-[4rem]'
                    type="button"
                    onClick={() => {
                      // Apply filter logic can be here
                    }}
                  >
                    Apply Filter
                  </button>
                  <button
                    className='bg-[#22cfee60] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-3 xs:mt-[1rem]'
                    type="button"
                    onClick={() => {
                      setStateFilter('');
                      setCityFilter('');
                      setSpecialtyFilter('');
                      setGenderFilter('');
                    }}
                  >
                    Clear Filter
                  </button>
                </form>
              </div>
            )}
          </form>
          <div className='flex items-start flex-wrap gap-[2rem] mt-[2rem] mb-[4rem]'>
            {filteredDoctors.slice(0, visibleCount).map((doctor) => (
              <div key={doctor._id} className='bg-[#fff] shadow-md border border-[#ddd] lg:w-[30%] xs:w-full rounded-[10px] p-4'>
                <div className='flex items-start'>
                  <img src={doctor.profilePic || avatar} alt='doctor' className={`w-[70px] h-[70px] rounded-[100px] object-cover`} />
                  <div className='ml-4'>
                    <h2 className='text-[18px] font-semibold'>{doctor.firstName} {doctor.lastName}</h2>
                    <p className='text-[14px] text-[#666]'>{doctor.profession}</p>
                    <div className='flex items-center gap-[10px] mt-2'>
                      <SlLocationPin />
                      <p className='text-[14px]'>{doctor.city}, {doctor.state}, {doctor.country}</p>
                    </div>
                    <div className='flex items-center gap-[10px] mt-1'>
                      <MdOutlineBusinessCenter />
                      <p className='text-[14px]'>{doctor.gender}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-[1rem]'>
                  <p className={`text-[14px] ${expandedDescriptions[doctor._id] ? 'text-gray-700' : 'text-gray-500'} line-clamp-3`}>
                    {(doctor.description || 'No description available').length > 100 ? (doctor.description || 'No description available').slice(0, 100) + '...' : doctor.description || 'No description available'}
                  </p>
                  <button
                    onClick={() => toggleDescription(doctor._id)}
                    className='text-[#22D1EE] text-[14px] mt-1'
                  >
                    {expandedDescriptions[doctor._id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default SearchDoctors;