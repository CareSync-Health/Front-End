import React, { useEffect, useState } from 'react';
import avatar from '../../../assets/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { loadPatient, updatePatientProfile } from '@/Redux/Actions/PatientActions';

const VerifyIdentity = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const patient = useSelector((state) => state.loadPatient.patient);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadPatient(id));
    }
  }, [dispatch, id]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      phoneNumber: patient?.phoneNumber || '',
      homeNumber: patient?.homeNumber || '',
      addressLine1: patient?.addressLine1 || '',
      addressLine2: patient?.addressLine2 || '',
      state: patient?.state || '',
      city: patient?.city || '',
      zipCode: patient?.zipCode || '',
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend
    dispatch(updatePatientProfile(patient?._id, formData)); // Example action to update patient data

    setIsEditing(false);
  };

  return (
    <div>
      <h1 className='text-[30px] font-bold font-Mulish'>Book Appointment</h1>
      <div>
        <div className='lg:flex items-center justify-between mt-[3rem]'>
        <h1 className='lg:text-[22px] xs:text-[21px] font-medium font-Mulish text-center'>Verify Identity For This Appointment</h1>
        <center>
        <Link to='/search_doctor' className='bg-[#22D1EE] py-2 px-[30px] w-[170px] text-[16px] text-[#fff] font-normal font-Mulish rounded-[10px] flex items-center justify-between gap-[1.5rem] lg:mt-0 xs:mt-[1.5rem]'>Continue <FaArrowRightLong /></Link>
        </center>
        </div>
        <div className='mt-[2rem] flex items-center gap-[1.5rem]'>
          <img src={patient?.profilePic || avatar} className='lg:w-[130px] lg:h-[130px] xs:w-[30%] xs:h-[30%] rounded-full object-cover' alt='Avatar' />
          <div>
            <h1 className='text-[18px] font-medium font-Mulish'>{patient?.firstName} {patient?.lastName}</h1>
            <div className='flex items-center gap-[1rem]'>
              <h1 className='text-[16px] font-normal font-Mulish'>{patient?.dob || 'Date of birth'}</h1>
              <hr className='w-[2px] h-[17px] bg-[#bbb]' />
              <h2 className='text-[14px] font-normal font-Mulish'>Not Disclosed</h2>
            </div>
            <h1 className='text-[16px] font-normal font-Mulish'>{patient?.email}</h1>
          </div>
        </div>
        <button onClick={handleEditClick} className='bg-[#22cfeeb0] py-[5px] px-[20px] mt-5 rounded-[10px] text-[17px] font-normal font-Mulish text-[#fff]'>Edit</button>
        <form onSubmit={handleSubmit} className='mt-[3rem] mb-[3rem]'>
          <div className='lg:flex items-center justify-between flex-wrap gap-[3rem]'>
            <div className='lg:w-[30%]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>CELL PHONE NUMBER</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.phoneNumber}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>HOME PHONE NUMBER</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='homeNumber'
                  value={formData.homeNumber}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.homeNumber || 'Not Provided'}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>ADDRESS LINE 1</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='addressLine1'
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.addressLine1 || 'Not Provided'}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>ADDRESS LINE 2</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='addressLine2'
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.addressLine2 || 'Not Provided'}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>STATE</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='state'
                  value={formData.state}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.state || 'Not Provided'}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>CITY</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.city || 'Not Provided'}</h3>
              )}
            </div>
            <div className='lg:w-[30%] lg:mt-0 xs:mt-[2rem]'>
              <h2 className='text-[14px] text-[#333333] font-normal font-Mulish'>POSTAL CODE</h2>
              {isEditing ? (
                <input
                  type='text'
                  name='zipCode'
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className='mt-3 text-[14px] font-Mulish font-normal bg-transparent py-[10px] px-2 w-full rounded-[10px] border border-[#000] outline-none'
                />
              ) : (
                <h3 className='mt-1 text-[14px] font-Mulish font-normal'>{patient?.zipCode || 'Not Provided'}</h3>
              )}
            </div>
          </div>
          {isEditing && (
            <button type='submit' className='mt-[2rem] bg-[#22cfeeb0] py-[5px] px-[30px] rounded-[10px] text-[17px] font-medium font-Mulish text-[#fff]'>
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;