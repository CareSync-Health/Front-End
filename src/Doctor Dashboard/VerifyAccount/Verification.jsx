import React, { useState, useEffect } from 'react';
import verifyVideo from '../../assets/verify-video.mp4';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import { Country, State, City } from 'country-state-city';

const Verification = () => {
  const doctor = useSelector((state) => state.doctorAuth.doctor);

  const [showVideo, setShowVideo] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);


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

  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }))
    : [];

  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
      value: city.name,
      label: city.name,
    }))
    : [];

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };
  const handleCountryChange2 = (country) => {
    setSelectedCountry2(country);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile(null);
    }
  };
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile2(file.name);
    } else {
      setSelectedFile2(null);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = {
  //     title: event.target.title.value,
  //     profession: event.target.profession.value,
  //     country: selectedCountry?.label,
  //     state: selectedState?.label,
  //     city: selectedCity?.label,
  //     areaOfSpecialization: event.target.areaOfSpecialization.value,
  //     licenseType: event.target.licenseType.value,
  //     year: event.target.year.value,
  //     licenseNumber: event.target.licenseNumber.value,
  //     country2: selectedCountry2?.label,
  //     licenseState: event.target.licenseState.value,
  //     licenseFile: selectedFile,
  //     idFile: selectedFile2,
  //   };

  //   dispatch(submitVerificationForm(formData));
  // };

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
        <form className={`mb-[1.5rem] ${showVideo && isSmallScreen ? 'hidden' : 'block'}`}>
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
                  <h2 type='text' className='text-black bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full'>{doctor?.firstname}</h2>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>last name</h2>
                  <h2 type='text' className='text-black bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full'>{doctor?.lastname}</h2>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>title</h2>
                  <input type='text' name='title' placeholder='Dr.' className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none' required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>profession</h2>
                  <select type='text' className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none' required >
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
                  value={selectedCountry}
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
                    value={selectedState}
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
                    value={selectedCity}
                    onChange={(city) => setSelectedCity(city)}
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
                  <h2 className='text-[15px] font-Nunito font-medium'>area of specialization</h2>
                  <select type='text' className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none' required >
                    <option>Isolo</option>
                    <option>Mafoluku</option>
                    <option>Oshodi</option>
                    <option>Ikeja</option>
                  </select>
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
                    <select type='text' className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none' required >
                      <option>Current State</option>
                      <option>Lagos</option>
                      <option>Anambra</option>
                      <option>Osun</option>
                      <option>Delta</option>
                    </select>
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>year</h2>
                    <input type='text' placeholder='Enter Year' className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' required />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>license number</h2>
                    <input type='text' placeholder='Enter Number' className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' required />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>country</h2>
                    <Select
                      options={countries2}
                      value={selectedCountry2}
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
                    <input type='text' placeholder='Enter State' className=' bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none' required />
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
                        {selectedFile ? selectedFile : 'Tap to upload documents'}
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
                    <h2 className='text-[15px] font-Nunito font-medium'>upload license</h2>
                    <label className='block bg-[#7ceafd] text-[#fff] text-[15px] font-Nunito font-bold px-3 py-[15px] mt-2 rounded-[8px] w-full text-center cursor-pointer'>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange2}
                      />
                      <span>
                        {selectedFile2 ? selectedFile2 : 'Tap to upload documents'}
                      </span>
                    </label>
                    <p className='mt-1 ms-1 text-[13px] text-red-600 font-Nunito font-medium'>NIN, Driver license, International Passport</p>
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