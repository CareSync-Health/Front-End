import React, { useState, useEffect } from 'react';
import verifyVideo from '../../assets/verify-video.mp4';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const doctor = useSelector((state) => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);

  const [showVideo, setShowVideo] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [title, setTitle] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [areaOfSpecialization, setAreaOfSpecialization] = useState('');
  const [country, setCountry] = useState(null);
  const [licenseCountry, setLicenseCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [licenseType, setLicenseType] = useState('');
  const [licenseYear, setLicenseYear] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [licenseState, setLicenseState] = useState('');
  const [licenseFile, setLicenseFile] = useState(null);
  const [idFile, setIdFile] = useState(null);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    if (isSmallScreen) {
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 4000); // 10 seconds

      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isSmallScreen]);


  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const countries2 = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const states = country
    ? State.getStatesOfCountry(country.value).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }))
    : [];

  const cities = state
    ? City.getCitiesOfState(country.value, state.value).map((city) => ({
      value: city.name,
      label: city.name,
    }))
    : [];

  const handleCountryChange = (country) => {
    setCountry(country);
    setState(null);
    setCity(null);
  };
  const handleCountryChange2 = (country) => {
    setLicenseCountry(country);
  };

  const handleStateChange = (state) => {
    setState(state);
    setCity(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLicenseFile(file.name);
    } else {
      setLicenseFile(null);
    }
  };
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIdFile(file.name);
    } else {
      setIdFile(null);
    }
  };


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("title", title)
    formData.set("age", age)
    formData.set("profession", profession)
    formData.set("areaOfSpecialization", areaOfSpecialization)
    formData.set("country", country)
    formData.set("state", state)
    formData.set("city", city)
    formData.set("licenseType", licenseType)
    formData.set("licenseYear", licenseYear)
    formData.set("licenseNumber", licenseNumber)
    formData.set("licenseCountry", licenseCountry)
    formData.set("licenseState", licenseState)
    formData.set("licenseFile", licenseFile)
    formData.set("idFile", idFile)

    // images.forEach(image => {
    //     formData.append('images', image)
    // })

    if (formData) {
      alert('success submitted');
      console.log(formData);
      navigate('/congratulation')
    }

    // dispatch(newProduct(formData))
    // navigate('/doctor_dashboard')
  };

  return (
    <div className='overflow-y-auto h-[100vh]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      <div className={`flex items-center ${isSmallScreen ? 'justify-center' : 'gap-[3rem]'}`}>
        {showVideo && isSmallScreen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center'>
            <video src={verifyVideo} autoPlay muted className='h-full' />
          </div>
        )}
        {!isSmallScreen && (
          <div className='fixed top-0'>
            <video src={verifyVideo} autoPlay muted className='h-screen' />
          </div>
        )}
        <form className={`mb-[1.5rem] ${showVideo && isSmallScreen ? 'hidden' : 'block'}`} onSubmit={handleSubmit}>
          <div className={`${showVideo && isSmallScreen ? 'hidden' : 'block'} shadow-2xl relative ${!isSmallScreen ? 'left-[22rem] w-[72vw]' : 'w-full px-4 py-8'} rounded-[20px] lg:mt-[1rem] py-3 pb-[5rem] lg:pt-[4rem] xs:pt-[2rem]`}>
            <div className={`${isSmallScreen ? 'w-full' : 'px-[4rem]'}`}>
              {/* PERSONAL INFORMATION */}
              <h1 className='text-[28px] font-Nunito font-semibold'>Personal Information</h1>
              <p className='lg:text-[16px] xs:text-[14px] mt-1 font-Nunito font-normal text-gray-900'>
                Fill in all the fields with the specified information. Please ensure that all your inputs are correct.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[1.5rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>first name</h2>
                  <h2 type='text' className='text-black bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full'>{doctor?.firstName}</h2>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>last name</h2>
                  <h2 type='text' className='text-black bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full'>{doctor?.lastName}</h2>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>title</h2>
                  <input
                    type='text'
                    placeholder='Dr.'
                    className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>age</h2>
                  <input
                    type='text'
                    placeholder='Age'
                    className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none'
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>gender</h2>
                  {/* <input
                    type='text'
                    placeholder='Gender'
                    className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none'
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  /> */}
                  <select 
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>profession</h2>
                  <select
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  >
                    <option>Select Profession</option>
                    <option>Dentist</option>
                    <option>Care Giver</option>
                    <option>Physoclogic</option>
                    <option>Dentist</option>
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>area of specialization</h2>
                  <select
                    type='text'
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    value={areaOfSpecialization}
                    onChange={(e) => setAreaOfSpecialization(e.target.value)}
                  >
                    <option>Select Area of Specialization</option>
                    <option>Dentist</option>
                    <option>Care Giver</option>
                    <option>Physoclogic</option>
                    <option>Dentist</option>
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>country</h2>
                  <Select
                    options={countries}
                    value={country}
                    onChange={handleCountryChange}
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold py-[0.4rem] mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: '#F7F9FC',
                        border: 'none',
                        boxShadow: 'none',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#E2E8F0' : '#F7F9FC',
                        color: '#333',
                      }),
                    }}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>state</h2>
                  <Select
                    options={states}
                    value={state}
                    onChange={handleStateChange}
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold py-[0.4rem] mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: '#F7F9FC',
                        border: 'none',
                        boxShadow: 'none',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#E2E8F0' : '#F7F9FC',
                        color: '#333',
                      }),
                    }}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>city</h2>
                  <Select
                    options={cities}
                    value={city}
                    onChange={(city) => setCity(city)}
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold py-[0.5rem] mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: '#F7F9FC',
                        border: 'none',
                        boxShadow: 'none',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#E2E8F0' : '#F7F9FC',
                        color: '#333',
                      }),
                    }}
                  />
                </div>
              </div>

              {/* LICENSE INFORMATION */}
              <div className='mt-[5rem]'>
                <h1 className='text-[30px] font-Nunito font-semibold'>License</h1>
                <p className='lg:text-[16px] xs:text-[14px] mt-1 font-Nunito font-normal text-gray-900'>
                  Fill in all the fields with the specified information. Please ensure that all your inputs are correct.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[1.5rem]'>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>license type</h2>
                    <select 
                      type='text' 
                      className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none' 
                      required 
                      value={licenseType}
                      onChange={(e) => setLicenseType(e.target.value)}
                    >
                      <option>Current State</option>
                      <option>Lagos</option>
                      <option>Anambra</option>
                      <option>Osun</option>
                      <option>Delta</option>
                    </select>
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>year</h2>
                    <input 
                      type='text' 
                      placeholder='Enter Year' 
                      className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' 
                      required 
                      value={licenseYear}
                      onChange={(e) => setLicenseYear(e.target.value)}
                    />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>license number</h2>
                    <input 
                      type='text' 
                      placeholder='Enter Number' 
                      className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' 
                      required 
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>country</h2>
                    <Select
                      options={countries2}
                      value={licenseCountry}
                      onChange={handleCountryChange2}
                      className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold py-[0.5rem] mt-2 rounded-[8px] w-full outline-none appearance-none'
                      required
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: '#F7F9FC',
                          border: 'none',
                          boxShadow: 'none',
                        }),
                        indicatorSeparator: () => ({
                          display: 'none',
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected ? '#E2E8F0' : '#F7F9FC',
                          color: '#333',
                        }),
                      }}
                    />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>license states / provinces (where applicable)</h2>
                    <input 
                      type='text' 
                      placeholder='Enter State' 
                      className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' 
                      required 
                      value={licenseState}
                      onChange={(e) => setLicenseState(e.target.value)}
                    />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>upload license</h2>
                    <label className='block bg-[#7ceafd] text-[#fff] text-[15px] font-Nunito font-bold px-3 py-[15px] mt-2 rounded-[8px] w-full text-center cursor-pointer'>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <span>
                        {licenseFile ? licenseFile : 'Tap to upload documents'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* IDENTIFICATION INFORMATION */}
              <div className='mt-[5rem]'>
                <h1 className='text-[28px] font-Nunito font-semibold'>Identification Information</h1>
                <p className='lg:text-[16px] xs:text-[14px] mt-1 font-Nunito font-normal text-gray-900'>
                  Fill in all the fields with the specified information. Please ensure that all your inputs are correct.
                </p>
                <div>
                  <div className='mt-[1.5rem]'>
                    <h2 className='text-[15px] font-Nunito font-medium'>upload ID</h2>
                    <label className='block bg-[#7ceafd] text-[#fff] text-[15px] font-Nunito font-bold px-3 py-[15px] mt-2 rounded-[8px] w-full text-center cursor-pointer'>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange2}
                      />
                      <span>
                        {idFile ? idFile : 'Tap to upload documents'}
                      </span>
                    </label>
                    <p className='mt-1 ms-1 text-[13px] text-red-600 font-Nunito font-medium'>NIN, Driver's license, International Passport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[2rem] relative flex items-end justify-end px-[10px] lg:left-[22.5rem]'>
            <button type='submit' className='bg-[#22D1EE] py-[13px] px-6 rounded-[12px] text-white font-Nunito font-bold'>Submit Documents</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;