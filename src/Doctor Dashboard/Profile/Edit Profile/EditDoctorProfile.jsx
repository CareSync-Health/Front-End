import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import { useTheme } from '../../Components/ThemeContext'
import profilebg from '../../../assets/profile-bg.png'
import profileavatar from '../../../assets/profile_avatar.png'
import { TbCameraStar } from "react-icons/tb";
import { FaTimes } from 'react-icons/fa'



const EditProfile = () => {

  const { theme, appearance } = useTheme();

  return (
    <div className='flex'>
      <Sidebar />
      <div className={`flex-1 lg:h-[99.9vh] xs:h-[85vh] w-full overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <Navbar messageCount={5} notificationCount={12} />
        <div className='mb-[5rem]'>
          {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}
          <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${profilebg})`, backgroundRepeat: 'no-repeat', backgroundSize: '' }} className='h-[280px] w-full'>
            <div className='flex items-center justify-center h-full gap-[2rem]'>
              <div className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
              </div>
              <div className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                <FaTimes className='text-[22px] text-[#ffffffbe]' />
              </div>
            </div>
            <div className='mt-[-5rem] w-[180px] object-contain rounded-full h-[64%] lg:ms-[4rem] xs:ms-[1rem]' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${profileavatar})`, backgroundRepeat: 'no-repeat', backgroundSize: '' }}>
              <div className='flex items-center justify-center h-full'>
                <div className='bg-[#00000073] p-3 rounded-full cursor-pointer'>
                  <TbCameraStar className='text-[24px] text-[#ffffffbe]' />
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[10rem] lg:px-[90px] xs:px-[10px]'>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>First Name</h2>
                <input type='text' placeholder='First Name' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Last Name</h2>
                <input type='text' placeholder='Last Name' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Username</h2>
                <input type='text' placeholder='Username' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Email</h2>
                <input type='email' placeholder='Email' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Gender</h2>
                <input type='text' placeholder='Gender' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Age</h2>
                <input type='text' placeholder='Age' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Address</h2>
                <input type='text' placeholder='Address' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
              <div>
                <h2 className='text-[15px] font-Nunito font-medium'>Phone Number</h2>
                <input type='text' placeholder='Phone Number' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
          <form>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3em]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Experience</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Title*</h2>
                  <input type='text' placeholder='Ex: Dentist' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Employment type</h2>
                  <select className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`}>
                    <option>Please Select</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Hospital name*</h2>
                  <input type='text' placeholder='Ex: Eye Care' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Location</h2>
                  <input type='text' placeholder='Ex: Nigeria, London' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Description</h2>
                  <textarea rows='6' placeholder='Job Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] lg:w-[985px] xs:w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
              </div>
            </div>
            <div className='lg:flex items-end justify-end lg:px-[90px] xs:px-[10px] mt-[2rem]'>
              <button type='submit' className='bg-[#22D1EE] text-white text-[18px] font-Nunito font-bold lg:w-[18%] xs:w-[50%] py-[7px] px-2 rounded-[12px]'>Save</button>
            </div>
          </form>
          <form>
            <div className='lg:px-[90px] xs:px-[10px] mt-[3rem]'>
              <h1 className='text-[28px] font-Nunito font-bold'>Education</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]'>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>School*</h2>
                  <input type='text' placeholder='ex: University of Lagos' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Degree*</h2>
                  <input type='text' placeholder='ex: bachelors' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Field of study</h2>
                  <input type='text' placeholder='ex: Dentist' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Grade</h2>
                  <input type='text' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>Start Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <h2 className='text-[15px] font-Nunito font-medium'>End Date*</h2>
                  <input type='date' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] w-full outline-none appearance-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} required />
                </div>
                <div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium'>Activities and societies</h2>
                    <textarea rows='6' placeholder='Activities Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] lg:w-[985px] xs:w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                  </div>
                  <div>
                    <h2 className='text-[15px] font-Nunito font-medium mt-5'>Description</h2>
                    <textarea rows='6' placeholder='Job Description' className={`text-[15px] font-Nunito font-bold px-3 py-[0.85rem] mt-2 rounded-[8px] lg:w-[985px] xs:w-full outline-none resize-none ${theme === 'dark' ? 'bg-gray-900 border border-dashed border-gray-700' : theme === 'light' ? 'bg-[#F7F9FC]' : ''} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-[#e6e6e6]' : 'text-gray-800'}`} />
                  </div>
                </div>
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