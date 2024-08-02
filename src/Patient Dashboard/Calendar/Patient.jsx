// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import dayjs from 'dayjs';
// import { fetchAppointments } from '../../Redux/Actions/PatientActions';
// import MiniNavbar from '../Components/MiniNavbar';
// import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';

// const PatientCalendar = () => {
//   const dispatch = useDispatch();
//   const { appointments = [], loading, error } = useSelector((state) => state.appointments);
//   const [currentDate, setCurrentDate] = useState(dayjs());
//   const [showFullYear, setShowFullYear] = useState(false);

//   useEffect(() => {
//     dispatch(fetchAppointments());
//   }, [dispatch]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDate(dayjs());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   const generateCalendar = () => {
//     let calendar = [];
//     if (showFullYear) {
//       let startYear = currentDate.startOf('year');
//       let endYear = currentDate.endOf('year');
//       let currentMonth = startYear.clone();

//       while (currentMonth.isBefore(endYear)) {
//         let daysInMonth = currentMonth.daysInMonth();
//         let days = [];

//         for (let j = 1; j <= daysInMonth; j++) {
//           days.push(dayjs(`${currentMonth.year()}-${currentMonth.month() + 1}-${j}`));
//         }

//         calendar.push(days);
//         currentMonth = currentMonth.add(1, 'month');
//       }
//     } else {
//       let startMonth = currentDate.subtract(3, 'month');

//       for (let i = 0; i < 4; i++) {
//         let month = startMonth.add(i, 'month');
//         let daysInMonth = month.daysInMonth();
//         let days = [];

//         for (let j = 1; j <= daysInMonth; j++) {
//           days.push(dayjs(`${month.year()}-${month.month() + 1}-${j}`));
//         }

//         let nextMonth = month.add(1, 'month');
//         for (let k = 1; k <= 7; k++) {
//           days.push(dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${k}`));
//         }

//         calendar.push(days);
//       }
//     }

//     return calendar;
//   };

//   const calendar = generateCalendar();

//   const toggleFullYearView = () => {
//     setShowFullYear(prev => !prev);
//   };

//   return (
//     <div className='flex'>
//       <Sidebar />
//       <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
//         <Navbar />
//         <MiniNavbar />
//         <div className='lg:px-[30px] xs:px-[5px] mt-[5rem] pb-[3rem]'>
//           <div className='flex items-end justify-end'>
//             <button
//               onClick={toggleFullYearView}
//               className='bg-[#22D1EE] text-white text-[14px] font-Mulish font-medium py-2 px-5 rounded-lg'
//             >
//               {showFullYear ? 'Show 4 Months' : 'Show Full Year'}
//             </button>
//           </div>
//           <div className='bg-[#2E2E2E] rounded-[10px] py-[30px] lg:px-[30px] xs:px-[10px] mt-[1rem]'>
//             <div className='flex flex-wrap items-center justify-between lg:px-[20px] xs:px-[10px] pt-[1rem]'>
//               <div className='border-dashed border-[2px] border-[#9647FF] rounded-[5px] w-[336px] p-[16px] flex items-center justify-between'>
//                 <div className='relative group'>
//                   <span className='text-[#B3B3B3] text-[11px] font-normal font-Mulish'>
//                     {appointments.filter(a => dayjs(a.date).isSame(dayjs(), 'day')).length}
//                   </span>
//                   <h2 className='absolute -top-3 text-[#B3B3B3] text-[11px] font-normal font-Mulish text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Today
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#17A1FA] text-[11px] font-normal font-Mulish'>
//                     {appointments.filter(a => dayjs(a.date).isAfter(dayjs())).length}
//                   </span>
//                   <h2 className='absolute -top-3 text-[#17A1FA] text-[11px] font-normal font-Mulish text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Upcoming
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#616161] text-[11px] font-normal font-Mulish'>
//                     {appointments.filter(a => dayjs(a.date).isBefore(dayjs())).length}
//                   </span>
//                   <h2 className='absolute -top-3 text-[#616161] text-[11px] font-normal font-Mulish text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Previous
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#616161] text-[11px] font-normal font-Mulish border border-[#616161] py-[5px] px-2 rounded-[4px]'>
//                     {appointments.filter(a => dayjs(a.date).isSame(dayjs(), 'month')).length}
//                   </span>
//                   <h2 className='absolute -top-9 text-[#616161] text-[11px] text-center font-normal font-Mulish opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     This Month
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#17A1FA] text-[11px] font-normal font-Mulish'>
//                     {appointments.filter(a => dayjs(a.date).isSame(dayjs().subtract(1, 'month'), 'month')).length}
//                   </span>
//                   <h2 className='absolute -top-7 text-[#17A1FA] text-[11px] font-normal font-Mulish text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Last Month
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#17A1FA] text-[11px] font-normal font-Mulish border border-[#17A1FA] py-[5px] px-2 rounded-[4px]'>
//                     {appointments.length}
//                   </span>
//                   <h2 className='absolute -top-9 text-[#17A1FA] text-[11px] font-normal font-Mulish text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Total Appointments
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#fff] text-[11px] font-normal font-Mulish bg-[#000] py-[5px] px-2 rounded-[4px]'>
//                     {appointments.length ? ((appointments.filter(a => dayjs(a.date).isSame(dayjs(), 'day')).length / appointments.length) * 100).toFixed(2) : 0}%
//                   </span>
//                   <h2 className='absolute -top-[4rem] text-[#fff] text-[11px] font-normal font-Mulish text-center bg-[#000] py-[4px] px-2 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     % of Appointments Today
//                   </h2>
//                 </div>
//                 <div className='relative group'>
//                   <span className='text-[#fff] text-[11px] font-normal font-Mulish bg-[#17A1FA] py-[5px] px-2 rounded-[4px]'>
//                     {appointments.length ? ((appointments.filter(a => dayjs(a.date).isSame(dayjs(), 'month')).length / appointments.length) * 100).toFixed(2) : 0}%
//                   </span>
//                   <h2 className='absolute -top-[4rem] text-[#fff] text-[11px] font-normal font-Mulish text-center bg-[#17A1FA] py-[4px] px-2 lg:ms-0 xs:ms-[-1rem] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     % of Appointments This Month
//                   </h2>
//                 </div>
//               </div>
//               <div className='flex items-center lg:gap-[3rem] xs:gap-[1rem] lg:mt-0 xs:mt-5'>
//                 <div className='relative group border-[2px] border-dashed border-[#9647FF] rounded-[5px] lg:w-[96px] xs:w-[93px] lg:p-[16px] xs:p-[12px]'>
//                   <span className='text-[#fff] text-center text-[13px] font-extralight font-Mulish'>
//                     {appointments.length ? appointments.reduce((prev, curr) => (appointments.filter(a => dayjs(a.date).isSame(dayjs(curr.date), 'day')).length > appointments.filter(a => dayjs(a.date).isSame(dayjs(prev.date), 'day')).length ? curr : prev), appointments[0])?.date || 'N/A' : 'N/A'}
//                   </span>
//                   <h2 className='absolute -top-6 text-[#B3B3B3] text-center text-[13px] font-extralight font-Mulish opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Highest Day
//                   </h2>
//                 </div>
//                 <div className='relative group border-[2px] border-dashed border-[#9647FF] rounded-[5px] lg:w-[96px] xs:w-[93px] lg:p-[16px] xs:p-[12px]'>
//                   <span className='text-[#fff] text-center text-[13px] font-extralight font-Mulish'>
//                     {appointments.length ? appointments.reduce((prev, curr) => (appointments.filter(a => dayjs(a.date).isSame(dayjs(curr.date), 'month')).length > appointments.filter(a => dayjs(a.date).isSame(dayjs(prev.date), 'month')).length ? curr : prev), appointments[0])?.date || 'N/A' : 'N/A'}
//                   </span>
//                   <h2 className='absolute -top-10 text-[#B3B3B3] text-center text-[13px] font-extralight font-Mulish opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Highest Month
//                   </h2>
//                 </div>
//                 <div className='relative group border-[2px] border-dashed border-[#9647FF] rounded-[5px] lg:w-[96px] xs:w-[93px] lg:p-[16px] xs:p-[12px]'>
//                   <span className='text-[#fff] text-center text-[13px] font-extralight font-Mulish'>
//                     {appointments.length ? appointments.reduce((prev, curr) => (appointments.filter(a => dayjs(a.date).isSame(dayjs(curr.date), 'year')).length > appointments.filter(a => dayjs(a.date).isSame(dayjs(prev.date), 'year')).length ? curr : prev), appointments[0])?.date || 'N/A' : 'N/A'}
//                   </span>
//                   <h2 className='absolute -top-6 text-[#B3B3B3] text-center text-[13px] font-extralight font-Mulish opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     Highest Year
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-between mt-[3rem]">
//               {calendar.map((month, index) => (
//                 <div key={index} className='lg:w-auto xs:w-full mt-[2rem]'>
//                   <div>
//                     <h3 className="text-[#B3B3B3] text-[11px] font-normal font-Mulish text-center mb-2">
//                       {month[0].format('MMMM YYYY')}
//                     </h3>
//                     <div className="grid grid-cols-7 gap-2 mb-2">
//                       {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
//                         <div key={idx} className="text-[#B3B3B3] mt-[1rem] text-[11px] font-normal font-Mulish text-center">
//                           {day}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="grid grid-cols-7 gap-2">
//                       {month.map((day, index) => {
//                         let isToday = day.isSame(dayjs(), 'day');
//                         let isUpcoming = appointments?.some(a => dayjs(a.date).isSame(day, 'day') && a.type === 'upcoming');
//                         let isCurrent = day.isSame(currentDate, 'day');
//                         let isPrevious = appointments?.some(a => dayjs(a.date).isSame(day, 'day') && a.type === 'previous');
//                         let isNextMonth = day.month() !== month[0].month();

//                         return (
//                           <div
//                             key={index}
//                             className={`p-2  text-center text-[10px] ${isNextMonth ? 'text-blue-500' : 'text-[#B3B3B3]'} font-normal font-Mulish ${isToday ? 'border border-blue-500' : ''} ${isUpcoming ? 'bg-blue-500 text-white' : ''} ${isCurrent ? 'border border-blue-500' : ''} ${isPrevious ? 'bg-blue-500 bg-opacity-20' : ''}`}
//                           >
//                             {day.date()}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='bg-[#fff] shadow-2xl lg:w-[699px] xs:w-full py-[25px] rounded-[12px] lg:px-[30px] xs:px-[15px] mt-[2rem]'>
//             <div className='flex items-center justify-between'>
//               <h2 className='text-[#303030] lg:text-[20px] xs:text-[14px] font-bold font-Mulish leading-[25px]'>Upcoming Appointment</h2>
//               <h3 className='text-[#383838] lg:text-[12px] xs:text-[10px] font-bold font-Mulish leading-[15px] bg-[#D0FBFF] lg:w-[111px] lg:p-2 xs:p-1 text-center rounded-[8px]'>August 14, 2021</h3>
//               <h2 className='lg:text-[16px] xs:text-[12px] font-normal text-[#383838] font-Mulish leading-[20px] lg:ms-0 xs:ms-5'>Consultation with Dr. James</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientCalendar;
