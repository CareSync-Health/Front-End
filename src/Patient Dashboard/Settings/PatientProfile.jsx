import React, { useEffect, useState } from 'react'
import avatar from '../../assets/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { loadPatient, updatePatientProfile } from '@/Redux/Actions/PatientActions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const PatientProfile = () => {
  const { id } = useParams();
  const patient = useSelector((state) => state.loadPatient.patient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPatient(id));
  }, [dispatch, id]);

  // Initialize state variables for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [userName, setUserName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (patient) {
      setFirstName(patient.firstName || "");
      setLastName(patient.lastName || "");
      setPhoneNumber(patient.phoneNumber || "");
      setHomeNumber(patient.homeNumber || "");
      setOccupation(patient.occupation || "");
      setUserName(patient.userName || "");
      setAddressLine1(patient.addressLine1 || "");
      setAddressLine2(patient.addressLine2 || "");
      setCountry(patient.country || "");
      setState(patient.state || "");
      setCity(patient.city || "");
      setZipCode(patient.zipCode || "");
      setDob(patient.dob || "");
      setAge(patient.age || "");
      setGender(patient.gender || "");
      setProfilePic(patient.profilePic || "");
    }
  }, [patient]);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result); // Set the profilePic state to the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (type) => {
    if (type === 'avatar') {
      setProfilePic(''); // Remove the avatar image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const updatedPatient = {};

    if (firstName !== patient.firstName) {updatedPatient.firstName = firstName};
    if (lastName !== patient.lastName) {updatedPatient.lastName = lastName};
    if (phoneNumber && phoneNumber !== patient.phoneNumber) {updatedPatient.phoneNumber = phoneNumber};
    if (homeNumber && homeNumber !== patient.homeNumber) {updatedPatient.homeNumber = homeNumber};
    if (occupation !== patient.occupation) {updatedPatient.occupation = occupation};
    if (userName && userName !== patient.userName) {updatedPatient.userName = userName};
    if (addressLine1 !== patient.addressLine1) {updatedPatient.addressLine1 = addressLine1};
    if (addressLine2 !== patient.addressLine2) {updatedPatient.addressLine2 = addressLine2};
    if (country !== patient.country) {updatedPatient.country = country};
    if (state !== patient.state) {updatedPatient.state = state};
    if (city !== patient.city) {updatedPatient.city = city};
    if (zipCode !== patient.zipCode) {updatedPatient.zipCode = zipCode};
    if (dob !== patient.dob) {updatedPatient.dob = dob};
    if (age !== patient.age) {updatedPatient.age = age};
    if (gender !== patient.gender) {updatedPatient.gender = gender};
    if (profilePic !== patient.profilePic) {updatedPatient.profilePic = profilePic};

    if (Object.keys(updatedPatient).length === 0) {
      toast.info('No changes detected.');
      return;
    }

    try {
      const response = await dispatch(updatePatientProfile(id, updatedPatient));
      if (response.success) {
        toast.success('Profile updated successfully!');

        // Reset the form inputs
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setHomeNumber('');
        setOccupation('');
        setUserName('');
        setAddressLine1('');
        setAddressLine2('');
        setCountry('');
        setState('');
        setCity('');
        setZipCode('');
        setDob('');
        setAge('');
        setGender('');
        setProfilePic(null);

        dispatch(loadPatient(id)); // Reload the patient data
      } else {
        setError(response.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  } 

  return (
    <div className='mt-[3rem]'>
      <div>
        <section className='md:px-7 px-4 mb-[3rem]'>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-between flex-wrap items-center'>
              <span className='flex items-center gap-5 md:gap-10'>
                <img src={profilePic || patient?.profilePic || avatar} alt="" className='rounded-full mt-4 md:w-32 md:h-32 w-24 h-24 object-cover border-[#E2F3F5] border-[6px]' />
                <span className='mt-4'>
                  <p className='text-[#384D6C] text-lg font-bold'>{patient?.firstName} {patient?.lastName}</p>
                  <p className='text-[#384D6C] text-lg'>{patient?.occupation || 'Occupation'}</p>
                  <p className='text-[#384D6C] text-sm'>{patient?.country} {patient?.state} {patient?.city}</p>
                </span>
              </span>
              <span className='flex gap-5 flex-wrap items-center mt-4'>
                <label className='px-4 font-bold text-white text-xs py-3 bg-[#22D1EE] border border-[#A6FFF2] rounded-lg cursor-pointer'>
                  Upload New Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
                <a className='px-12 font-bold text-[#384D6C] text-xs py-3 bg-[#E2F3F5] border border-[#384D6C] rounded-lg' onClick={() => handleDeleteImage('avatar')}>
                  Delete
                </a>
              </span>
            </div>
            <h2 className='text-[28px] font-Mulish font-medium mt-12 px-2'>Profile Information</h2>
            <div className='flex md:px-12 lg:px-2 md:gap-9 lg:flex-wrap xs:flex-wrap mt-5 md:flex-nowrap'>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="First Name" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Last Name" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Phone Number" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Home Number</label>
                <input value={homeNumber} onChange={(e) => setHomeNumber(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Home Number" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Occupation</label>
                <input value={occupation} onChange={(e) => setOccupation(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Occupation" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">User Name</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="User Name" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Address Line 1</label>
                <input value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Address Line 1" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Address Line 2</label>
                <input value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Address Line 2" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Country</label>
                <input value={country} onChange={(e) => setCountry(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Country" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">State</label>
                <input value={state} onChange={(e) => setState(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="State" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="City" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Zip Code</label>
                <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="Zip Code" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Date of Birth</label>
                <input value={dob} onChange={(e) => setDob(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="date" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Age</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Gender</label>
                <input value={gender} onChange={(e) => setGender(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" />
              </div>
            </div>
            <div className='flex items-end justify-end'>
              <button type='submit' className={`mt-8 px-10 py-3 bg-[#22D1EE] text-white font-bold rounded-lg ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Saving Changes' : 'Save Changes'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default PatientProfile;