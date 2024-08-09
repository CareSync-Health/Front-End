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
import { getAllDoctors, searchDoctors } from '../../../../Redux/Actions/PatientActions';
import caresync from '../../../../assets/CareSync.png';

const SearchDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doctors = [] } = useSelector((state) => state.getAllDoctors);
  const { doctorSearch = [] } = useSelector((state) => state.searchDoctors);

  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  useEffect(() => {
    if (query.trim() || stateFilter || cityFilter || specialtyFilter || genderFilter) {
      dispatch(searchDoctors({ query, stateFilter, cityFilter, specialtyFilter, genderFilter }));
    }
  }, [query, stateFilter, cityFilter, specialtyFilter, genderFilter, dispatch]);

  const loadMoreItems = useCallback(() => {
    if (inView && visibleCount < doctors.length) {
      setVisibleCount((prevCount) => prevCount + 6);
    }
  }, [inView, visibleCount, doctors.length]);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems, inView]);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim() || stateFilter || cityFilter || specialtyFilter || genderFilter) {
        dispatch(searchDoctors({ query, stateFilter, cityFilter, specialtyFilter, genderFilter }));
      }
    }
  };

  const handleFilterApply = () => {
    dispatch(searchDoctors({ query, stateFilter, cityFilter, specialtyFilter, genderFilter }));
    setShowFilter(false);
  };

  const handleFilterClear = () => {
    setStateFilter('');
    setCityFilter('');
    setSpecialtyFilter('');
    setGenderFilter('');
    dispatch(searchDoctors({ query }));
    setShowFilter(false);
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar />
        <div className='mt-[3rem] xs:px-[10px] lg:px-[30px]'>
          <form>
            <div>
              <input
                type='text'
                placeholder='Search for a doctor'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className='border border-[#eee] rounded-[100px] py-[7px] px-4 lg:w-[600px] xs:w-full bg-[#fff] shadow-sm outline-none'
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
                    value={stateFilter}
                    onChange={(e) => setStateFilter(e.target.value)}
                    className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none'
                  />
                  <input
                    type='text'
                    placeholder='City'
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className='border border-[#000] w-full lg:py-[5px] xs:py-2 px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                  />
                  <select
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                    className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                  >
                    <option value=''>Specialty</option>
                    <option value='Dentist'>Dentist</option>
                    <option value='Care Giver'>Care Giver</option>
                    <option value='Psychologist'>Psychologist</option>
                  </select>
                  <select
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className='border border-[#000] w-full lg:py-[6px] xs:py-[9px] px-[10px] rounded-[12px] outline-none lg:mt-[1rem] xs:mt-[2rem]'
                  >
                    <option value=''>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                  <button
                    className='bg-[#22D1EE] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-[2rem] xs:mt-[4rem]'
                    type="button"
                    onClick={handleFilterApply}
                  >
                    Apply Filter
                  </button>
                  <button
                    className='bg-[#22cfee60] w-full py-[7px] px-[10px] text-[16px] text-[#fff] font-medium font-Mulish rounded-[10px] lg:mt-3 xs:mt-[1rem]'
                    type="button"
                    onClick={handleFilterClear}
                  >
                    Clear Filter
                  </button>
                </form>
              </div>
            )}
          </form>
          <div className='flex items-start flex-wrap justify-between gap-[2rem] mt-[2rem] mb-[4rem]'>
            {(doctorSearch.length > 0 ? doctorSearch : doctors.slice(0, visibleCount)).map((doctor) => (
              <div key={doctor._id} className='bg-[#fff] shadow-md border border-[#ddd] lg:w-[30%] xs:w-full rounded-[10px] p-4'>
                <div className='flex items-center'>
                  <img src={doctor?.image || caresync} alt='doctor' className='w-[90px] rounded-[100px] object-cover' />
                  <div className='ml-4'>
                    <h2 className='text-[18px] font-semibold'>{doctor?.firstName} {doctor?.lastName}</h2>
                    <p className='text-[14px] text-[#666]'>{doctor?.profession}</p>
                    <div className='flex items-center gap-[10px] mt-2'>
                      <SlLocationPin />
                      <p className='text-[14px]'>{doctor?.city}, {doctor?.state}, {doctor?.country}</p>
                    </div>
                    <div className='flex items-center gap-[10px] mt-1'>
                      <MdOutlineBusinessCenter />
                      <p className='text-[14px]'>{doctor?.gender}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-[1rem]'>
                  <p className={`text-[14px] ${expandedDescriptions[doctor._id] ? 'text-gray-700' : 'text-gray-500'} line-clamp-3`}>
                    {doctor?.description}
                  </p>
                  <button
                    className='text-[14px] text-[#22D1EE] mt-2'
                    onClick={() => toggleDescription(doctor._id)}
                  >
                    {expandedDescriptions[doctor._id] ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <Link to={`/doctor/${doctor._id}`} className='flex items-center mt-4 text-[#22D1EE]'>
                  View Profile <FaArrowRightLong className='ml-2' />
                </Link>
              </div>
            ))}
            {doctorSearch.length === 0 && doctors.length === 0 && (
              <div className='w-full text-center text-[18px] font-semibold'>
                No doctors found.
              </div>
            )}
          </div>
          {visibleCount < doctors.length && (
            <div ref={ref} className='text-center mb-[2rem]'>
              <button
                className='bg-[#22D1EE] text-[#fff] py-2 px-4 rounded-[10px]'
                onClick={() => setVisibleCount(visibleCount + 6)}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDoctors;