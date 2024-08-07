import React, { useState, useEffect } from 'react';
import verifyVideo from '../../assets/verify-video.mp4';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';
import { doctor_verification } from '../../Redux/Actions/DoctorActions';

const Verification = () => {
  const doctor = useSelector((state) => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);

  const [showVideo, setShowVideo] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [title, setTitle] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [profession, setProfession] = useState('')
  const [areaOfSpecialization, setAreaOfSpecialization] = useState('')
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [licenseType, setLicenseType] = useState('')
  const [licenseYear, setLicenseYear] = useState('')
  const [licenseNumber, setLicenseNumber] = useState('')
  const [licenseCountry, setLicenseCountry] = useState(null)
  const [licenseState, setLicenseState] = useState('')
  const [licenseImage, setLicenseImage] = useState(null)
  const [licenseImageName, setLicenseImageName] = useState('')
  const [idImage, setIdImage] = useState(null)
  const [idImageName, setIdImageName] = useState('')

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

  const areaOfSpecializations = [
    'Allergist',
    'Immunologist',
    'Internal Medicine (Neurology)',
    'Naturopath',
    'Naturopathic Doctor',
    'Osteopath',
    'Physiatrist',
    'Podiatrist',
    'Pulmonologist',
    'Addiction Medicine',
    'Aviation Medicine',
    'Bipolar Disorders',
    'Burn Care',
    'Clinical Oncologist',
    'Clinical Psychologist',
    'Conduct Disorders',
    'Ear, Nose And Throat',
    'Eating Disorders',
    'Existential Crisis',
    'Gastroenterologist',
    'Grief',
    'Haematopathology',
    'Hematologist',
    'Hematology & Oncology',
    'Histopathology (Forensic Pathology)',
    'Intensivist',
    'Internal Medicine (Cardiology)',
    'Internal Medicine (Endocrinology)',
    'Internal Medicine (Nephrology)',
    'Internal Medicine (Respiratory)',
    'Medical Aesthetics',
    'Mood Disorders',
    'Nephrology',
    'Nurse Anesthesiologist',
    'Occupational Health',
    'Occupational Therapy',
    'Ocd - Obsessive Compulsive Disorders',
    'Paediatric Neurology',
    'Paediatric Surgery',
    'Paediatrics (Cardiology)',
    'Paediatrics (Haematology)',
    'Paediatrics (Infectious Disease)',
    'Paediatrics (Nephrology)',
    'Paediatrics (Neurology)',
    'Paediatrics (Respiratory)',
    'Panic Disorders',
    'Pediatric Surgeon',
    'Pediatrics (Gastroenterology)',
    'Pediatrics (Neonatology)',
    'Pharmacist',
    'Plastic Surgery',
    'Radiation Oncologist',
    'Radiation Oncology',
    'Radiologist',
    'Reconstructive Procedures',
    'Registered Dietician',
    'Registered Social Worker (Rsw)',
    'Rheumatology',
    'Sleep Disorders',
    'Surgery (Burns And Plastics)',
    'Surgery (Cardiothoracic)',
    'Surgery (Paediatric)',
    'Traumatology',
    'Anxiety Disorders',
    'Chemical Pathologist',
    'Consultant Family Practitioner',
    'Depression',
    'Family And Reproductive Health Specialist',
    'Geriatrics',
    'Gynecologist & Fertility Specialist',
    'Hiv Counselling',
    'Internal Medicine (Gastroenterology)',
    'Internist',
    'Ivf-In Vitro Fertilization',
    'Neurology',
    'Oncology',
    'Orthopedic And Trauma Surgeon',
    'Otolaryngologist',
    'Paediatrics (Neonatology)',
    'Pain And Palliative Medicine',
    'Pathologist',
    'Pediatrics (Hematology & Oncology)',
    'Physical Therapist',
    'Ptsd Posttraumatic Stress Disorder',
    'Reproductive Medicine',
    'Rheumatologist',
    'Sexual Health',
    'Sickle Cell Disease',
    'Surgery (Neurology)',
    'Venerology',
    'Weight Loss',
    'Wellness Coach',
    'Cardiothoracic And Vascular Surgeon',
    'Children And Adolescents',
    'Clinical Pathologist',
    'Counselor',
    'Critical Care',
    'General Dentistry',
    'Gynecologist',
    'Haematology',
    'Hematology',
    'Infectious Disease',
    'Medical Microbiology',
    'Obstetrician',
    'Oncologist',
    'Orthopaedics',
    'Surgery (Urology)',
    'Certified Covid Test Provider',
    'Community Medicine',
    'Dermatology',
    'General Surgeon',
    'Haematologist',
    'Neurologist',
    'Orthopaedic Surgeon & Traumatologist',
    'Orthopaedics & Traumatology',
    'Pediatrics',
    'Psychiatrist',
    'Surgeon',
    'Surgery (General)',
    'Acute Care',
    'Cardiologist',
    'Dentistry',
    'Emergency Medicine',
    'General Surgery',
    'Histopathology',
    'Neurosurgeon',
    'Optometrist',
    'Orthopedics',
    'Physiotherapy',
    'Womens Health',
    'Orthopaedic Surgeon',
    'Urologist',
    'Adult Medicine',
    'Community Health',
    'Nephrologist',
    'Nurse',
    'Paediatrician',
    'Psychiatry',
    'Paediatrician',
    'Psychiatry',
    'Ophthalmologist',
    'Pediatrician',
    'Registered Nurse',
    'Mental Health',
    'Mental Health Provider',
    'Public Health',
    'Endocrinologist',
    'General Nursing',
    'Radiology',
    'Anesthesiologist',
    'Midwife',
    'Internal Medicine',
    'Physician',
    'General Medicine',
    'Family Medicine',
    'Obstetrician & Gynecologist',
    'General Practice',
  ]

  const licenseTypes = [
    'Clinical Psychologist',
    'Dea Number',
    'Folio Number',
    'Medical Board State',
    'Medical License Number',
    'Npi Number',
    'Registration Number',
    'Sk Covid Certificate Id'
  ]



  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    if (isSmallScreen) {
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 4000);

      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isSmallScreen]);

  
  const countries = Country.getAllCountries().map((country) => ({
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

  const handleStateChange = (state) => {
    setState(state);
    setCity(null);
  };

  const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      if (field === 'licenseImage') {
        setLicenseImage(file);
        setLicenseImageName(file.name);
      } else if (field === 'idImage') {
        setIdImage(file);
        setIdImageName(file.name);
      }
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      title,
      age,
      gender,
      profession,
      areaOfSpecialization,
      country: country?.label,
      state: state?.label,
      city: city?.label,
      licenseType,
      licenseYear,
      licenseNumber,
      licenseCountry: licenseCountry?.label,
      licenseState,
      licenseImage,
      licenseImageName,
      idImage,
      idImageName,
    };

    try {
      await dispatch(doctor_verification(doctor?.id, body, navigate));
    } catch (error) {
      console.log(error);
    }
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
                  <select
                    className='text-[#B1B7C1] bg-[#F7F9FC] text-[15px] font-Nunito font-bold px-3 py-3 mt-2 rounded-[8px] w-full outline-none appearance-none'
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
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
                    {professions.map(profess => (
                      <option key={profess} value={profess}>{profess}</option>
                    ))}
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
                    {areaOfSpecializations.map(specialization => (
                      <option key={specialization} value={specialization}>{specialization}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>country</h2>
                  <Select
                    options={countries}
                    value={country}
                    onChange={handleCountryChange}
                    placeholder='Select country'
                    isClearable
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
                    placeholder='Select state'
                    isClearable
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
                    placeholder='Select city'
                    isClearable
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
                      {licenseTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
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
                      options={countries}
                      value={licenseCountry}
                      onChange={(country) => setLicenseCountry(country)}
                      placeholder='Select country'
                      isClearable
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
                        accept='image/*'
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'licenseImage')}
                        />
                      <span>
                        {licenseImageName ? (
                          licenseImageName
                        ) : (
                          'Tap to upload documents'
                        )}
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
                        accept='image/*'
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'idImage')}
                      />
                     <span>
                        {idImageName ? (
                          idImageName
                        ) : (
                          'Tap to upload documents'
                        )}
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