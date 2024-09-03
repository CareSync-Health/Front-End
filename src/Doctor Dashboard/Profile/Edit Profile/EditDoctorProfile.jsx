import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import { useTheme } from '../../Components/ThemeContext'
import profilebg from '../../../assets/profile-bg.png'
import profileavatar from '../../../assets/profile_avatar.png'
import { TbCameraStar } from "react-icons/tb";
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadDoctor, updateDoctorProfile } from '../../../Redux/Actions/DoctorActions'
import toast from 'react-hot-toast'
import CareSyncBanner from '../../../assets/CareSync Banner.jpg'
import CareSync from '../../../assets/CareSync Logo.png'

const EditProfile = () => {

  const { theme, appearance } = useTheme();
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.loadDoctor.doctor);

  useEffect(() => {
    dispatch(loadDoctor(id));
  }, [dispatch, id]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [experienceTitle, setExperienceTitle] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [experienceLocation, setExperienceLocation] = useState('');
  const [experienceStartDate, setExperienceStartDate] = useState('');
  const [experienceEndDate, setExperienceEndDate] = useState('');
  const [experienceDescription, setExperienceDescription] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [grade, setGrade] = useState('');
  const [educationStartDate, setEducationStartDate] = useState('');
  const [educationEndDate, setEducationEndDate] = useState('');
  const [educationActivities, setEducationActivities] = useState('');
  const [educationDescription, setEducationDescription] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [headerPic, setHeaderPic] = useState(null);
  const [error, setError] = useState('');

  const employmentTypes = [
    'full time',
    'part time',
    'freelance',
    'consultant',
    'contract',
    'internship',
    'other'
  ]


  useEffect(() => {
    if (doctor) {
      setHeaderPic(doctor.headerPic || "");
      setProfilePic(doctor.profilePic || "");
      setFirstName(doctor.firstName || '');
      setLastName(doctor.lastName || '');
      setUserName(doctor.userName || '');
      setEmail(doctor.email || '');
      setGender(doctor.gender || '');
      setDob(doctor.dob || '');
      setCountry(doctor.country || '');
      setState(doctor.state || '');
      setCity(doctor.city || '');
      setPhoneNumber(doctor.phoneNumber || '');
      setExperienceTitle(doctor.experienceTitle || '');
      setEmploymentType(doctor.employmentType || '');
      setHospitalName(doctor.hospitalName || '');
      setExperienceLocation(doctor.experienceLocation || '');
      setExperienceStartDate(doctor.experienceStartDate || '');
      setExperienceEndDate(doctor.experienceEndDate || '');
      setExperienceDescription(doctor.experienceDescription || '');
      setSchool(doctor.school || '');
      setDegree(doctor.degree || '');
      setFieldOfStudy(doctor.fieldOfStudy || '');
      setGrade(doctor.grade || '');
      setEducationStartDate(doctor.educationStartDate || '');
      setEducationEndDate(doctor.educationEndDate || '');
      setEducationActivities(doctor.educationActivities || '');
      setEducationDescription(doctor.educationDescription || '');
    }
  }, [doctor]);

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

  const handleHeaderUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHeaderPic(reader.result); // Set the headerPic state to the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (type) => {
    if (type === 'header') {
      setHeaderPic(''); // Remove the header image
    } else if (type === 'avatar') {
      setProfilePic(''); // Remove the avatar image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
  
    const updatedDoctor = {};
  
    if (firstName !== doctor.firstName) updatedDoctor.firstName = firstName;
    if (lastName !== doctor.lastName) updatedDoctor.lastName = lastName;
    if (userName && userName !== doctor.userName) updatedDoctor.userName = userName;
    if (gender !== doctor.gender) updatedDoctor.gender = gender;
    if (dob !== doctor.dob) updatedDoctor.dob = dob;
    if (country !== doctor.country) updatedDoctor.country = country;
    if (state !== doctor.state) updatedDoctor.state = state;
    if (city !== doctor.city) updatedDoctor.city = city;
    if (headerPic !== doctor.headerPic) updatedDoctor.headerPic = headerPic;
    if (profilePic !== doctor.profilePic) updatedDoctor.profilePic = profilePic;
    if (experienceTitle !== doctor.experienceTitle) updatedDoctor.experienceTitle = experienceTitle;
    if (employmentType !== doctor.employmentType) updatedDoctor.employmentType = employmentType;
    if (hospitalName !== doctor.hospitalName) updatedDoctor.hospitalName = hospitalName;
    if (experienceLocation !== doctor.experienceLocation) updatedDoctor.experienceLocation = experienceLocation;
    if (experienceStartDate !== doctor.experienceStartDate) updatedDoctor.experienceStartDate = experienceStartDate;
    if (experienceEndDate !== doctor.experienceEndDate) updatedDoctor.experienceEndDate = experienceEndDate;
    if (experienceDescription !== doctor.experienceDescription) updatedDoctor.experienceDescription = experienceDescription;
    if (school !== doctor.school) updatedDoctor.school = school;
    if (degree !== doctor.degree) updatedDoctor.degree = degree;
    if (fieldOfStudy !== doctor.fieldOfStudy) updatedDoctor.fieldOfStudy = fieldOfStudy;
    if (grade !== doctor.grade) updatedDoctor.grade = grade;
    if (educationStartDate !== doctor.educationStartDate) updatedDoctor.educationStartDate = educationStartDate;
    if (educationEndDate !== doctor.educationEndDate) updatedDoctor.educationEndDate = educationEndDate;
    if (educationActivities !== doctor.educationActivities) updatedDoctor.educationActivities = educationActivities;
    if (educationDescription !== doctor.educationDescription) updatedDoctor.educationDescription = educationDescription;
  
    if (Object.keys(updatedDoctor).length === 0) {
      toast.info('No changes detected.');
      return;
    }

    try {
      const response = await dispatch(updateDoctorProfile(id, updatedDoctor));
      if (response.success) {
        toast.success('Profile updated successfully!');

        // Reset the form inputs
        setFirstName('');
        setLastName('');
        setUserName('');
        setGender('');
        setDob('');
        setCountry('');
        setState('');
        setCity('');
        setPhoneNumber('');
        setExperienceTitle('');
        setEmploymentType('');
        setHospitalName('');
        setExperienceLocation('');
        setExperienceStartDate('');
        setExperienceEndDate('');
        setExperienceDescription('');
        setSchool('');
        setDegree('');
        setFieldOfStudy('');
        setGrade('');
        setEducationStartDate('');
        setEducationEndDate('');
        setEducationActivities('');
        setEducationDescription('');
        setProfilePic(null);
        setHeaderPic(null);

        dispatch(loadDoctor());
      } else {
        setError(response.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div className='mb-[5rem]'>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <form onSubmit={handleSubmit}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${headerPic || doctor?.headerPic || avatar})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 300,
                maxWidth: 1200,
                margin: '0 auto',
              }}
              className='w-full'
            >
              <div className='flex items-center justify-center h-full gap-[2rem]'>
                <label className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                  <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleHeaderUpload}
                    className="hidden"
                  />
                </label>
                <div
                  className='bg-[#00000073] p-3 rounded-full cursor-pointer'
                  onClick={() => handleDeleteImage('header')}
                >
                  <FaTimes className='text-[22px] text-[#ffffffbe]' />
                </div>
              </div>
              <div
                className='mt-[-5rem] w-[180px] object-contain rounded-full h-[64%] lg:ms-[4rem] xs:ms-[1rem]'
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${profilePic || doctor?.profilePic})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  width: 180,
                  height: 180,
                }}
              >
                <div className='flex items-center justify-center gap-[10px] h-full'>
                  <label className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                    <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                  </label>
                  <div
                    className='bg-[#00000073] p-3 rounded-full cursor-pointer'
                    onClick={() => handleDeleteImage('avatar')}
                  >
                    <FaTimes className='text-[22px] text-[#ffffffbe]' />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[10rem] lg:px-[90px] xs:px-[10px]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>First Name</h2>
                  <input
                    type='text'
                    value={firstName}
                    placeholder={doctor?.firstName || 'First Name'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Last Name</h2>
                  <input
                    type='text'
                    value={lastName}
                    placeholder={doctor?.lastName || 'Last Name'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Username</h2>
                  <input
                    type='text'
                    value={userName}
                    placeholder={doctor?.userName || 'Username'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Email</h2>
                  <h2 className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}>{doctor?.email || 'Email Address'}</h2>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Gender</h2>
                  <input
                    type='text'
                    value={gender}
                    placeholder={doctor?.gender || 'Gender'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Date of birth</h2>
                  <input
                    type='text'
                    value={dob}
                    placeholder={doctor?.dob || 'DD / MM / YY'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Country</h2>
                  <input
                    type='text'
                    value={country}
                    placeholder={doctor?.country || 'Country'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>State</h2>
                  <input
                    type='text'
                    value={state}
                    placeholder={doctor?.state || 'State'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>City</h2>
                  <input
                    type='text'
                    value={city}
                    placeholder={doctor?.city || 'City'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Phone Number</h2>
                  <input
                    type='text'
                    value={phoneNumber}
                    placeholder={doctor?.phoneNumber || 'Phone Number'}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
                <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
              </div>
            </div>
          </form>

          {/* EXPERIENCE FORM */}
          <form onSubmit={handleSubmit}>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3em]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Experience</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Title*</h2>
                  <input
                    type='text'
                    value={experienceTitle}
                    placeholder='Eg. Dentist'
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    required
                    onChange={(e) => setExperienceTitle(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Employment type</h2>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} >
                    {employmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Hospital name*</h2>
                  <input
                    type='text'
                    value={hospitalName}
                    placeholder='Ex: Eye Care'
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    required
                    onChange={(e) => setHospitalName(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Location</h2>
                  <input
                    type='text'
                    value={experienceLocation}
                    placeholder='Ex: Nigeria, London' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setExperienceLocation(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input
                    type='date'
                    value={experienceStartDate}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    required
                    onChange={(e) => setExperienceStartDate(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input
                    type='date'
                    value={experienceEndDate}
                    className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                    required
                    onChange={(e) => setExperienceEndDate(e.target.value)} />
                </div>
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Description</h2>
                <textarea
                  rows='6'
                  value={experienceDescription}
                  placeholder='Job Description'
                  className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}
                  onChange={(e) => setExperienceDescription(e.target.value)} />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>

          {/* EDUCATION FORM */}
          <form onSubmit={handleSubmit}>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3rem]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Education</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>School*</h2>
                  <input type='text' value={school} placeholder='ex: University of Lagos' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required onChange={(e) => setSchool(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Degree*</h2>
                  <input type='text' value={degree} placeholder='ex: bachelors' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setDegree(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Field of study</h2>
                  <input type='text' value={fieldOfStudy} placeholder='ex: Dentist' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setFieldOfStudy(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Grade</h2>
                  <input type='text' value={grade} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setGrade(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input type='date' value={educationStartDate} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required onChange={(e) => setEducationStartDate(e.target.value)} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input type='date' value={educationEndDate} className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required onChange={(e) => setEducationEndDate(e.target.value)} />
                </div>
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Activities and societies</h2>
                <textarea rows='6' value={educationActivities} placeholder='Activities Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setEducationActivities(e.target.value)} />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium mt-[2rem]'>Description</h2>
                <textarea rows='6' value={educationDescription} placeholder='Job Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} onChange={(e) => setEducationDescription(e.target.value)} />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile