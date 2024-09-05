import React, { useEffect, useState } from 'react';
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Avatar from '../../../../assets/avatar.png';
import { RxAvatar } from "react-icons/rx";
import { useTheme } from '../../../Components/ThemeContext';
import axios from 'axios';
import { config } from '@/Redux/Config';
import NewDm from './new-dm/NewDm';
import { useDispatch, useSelector } from 'react-redux';
import { closeChat, setDirectMessagesContacts, setPatientDirectMessagesContacts, setSelectedChatData, setSelectedChatMessages, setSelectedChatType } from '@/Redux/Actions/DoctorActions';

const ContactsContainer = () => {
    const [activeTab, setActiveTab] = useState('doctors');
    const { theme, appearance } = useTheme();
    const dispatch = useDispatch();
    const directMessagesContacts = useSelector((state) => state.createChat.directMessagesContacts || []);
    const patientDirectMessagesContacts = useSelector((state) => state.createChat.patientDirectMessagesContacts || []);
    const contactStatuses = useSelector((state) => state.createChat.contactStatuses);
    const url = config.liveUrl;
    const { selectedChatData, selectedChatType } = useSelector((state) => state.createChat);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(() => {
        const getContacts = async () => {
            try {
                // Retrieve the token from localStorage
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('No token found');
                }

                const { data } = await axios.get(`${url}/contacts/get-contact-for-dm`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (data.status === "Ok") {
                    dispatch(setDirectMessagesContacts(data.data));
                }
            } catch (error) {
                console.error("Failed to fetch contacts:", error);
            }
        };

        getContacts();
    }, [dispatch, url]);

    useEffect(() => {
        const getPatientContacts = async () => {
            try {

                // Retrieve the token from localStorage
                const token = localStorage.getItem('token');

                if (!token) {
                    throw new Error('No token found');
                }

                const { data } = await axios.get(`${url}/contacts/get-patient-contact-for-dm`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (data.status === "Ok") {
                    dispatch(setPatientDirectMessagesContacts(data.data));
                }
            } catch (error) {
                console.error("Failed to fetch contacts:", error);
            }
        };

        getPatientContacts();
    }, [dispatch, url]);


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredContacts = (directMessagesContacts || []).filter(contact => {
        const fullName = `${contact.firstName.trim()} ${contact.lastName.trim()}`.toLowerCase();
        return fullName.includes(searchQuery.trim().toLowerCase());
    });

    const filteredPatientContacts = (patientDirectMessagesContacts || []).filter(contact => {
        const fullName = `${contact.firstName.trim()} ${contact.lastName.trim()}`.toLowerCase();
        return fullName.includes(searchQuery.trim().toLowerCase());
    });

    const handleClick = (contact) => {
        if (contact) {
            dispatch(setSelectedChatType("contact"));
            dispatch(setSelectedChatData(contact));
            if (selectedChatData && selectedChatData._id !== contact._id) {
                dispatch(setSelectedChatMessages([]));
            }
        }
    };


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        dispatch(closeChat()); // Dispatch closeChat whenever a tab is clicked
    };

    return (
        <div className={`border-r-[1px] fixed top-0 lg:w-[361px] xs:w-full h-screen shadow-lg py-3 ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <div className='flex items-center justify-between px-4'>
                <h2 className='text-[18px] font-bold font-Nunito'>Messages</h2>
                <div className='flex items-center gap-[1rem]'>
                    <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><BsThreeDots /></h2>
                    <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><RiVideoAddFill /></h2>
                    <h2 className={`w-[33px] py-[8px] text-[18px] px-[8px] rounded-[18px] ${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E4E6EB]' : 'bg-gray-100'}`}><FaEdit /></h2>
                </div>
            </div>
            <div className='px-4'>
                <div className={`flex items-center rounded-[100px] px-4 py-[9px] mt-4 ${theme === 'dark' ? 'bg-transparent border border-white text-white' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}>
                    <BsSearch className='text-[#A0A4A8] text-lg block float-left cursor-pointer mr-2' />
                    <input
                        type='text'
                        placeholder='Search Messages'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='text-[14px] font-Inter leading-[16px] text-start font-normal bg-transparent lg:w-[350px] xs:w-[150px] rounded-md focus:outline-none border-none'
                    />
                </div>
            </div>
            {/* <h2 className='mt-2 ms-2 text-[16px] text-[#17B978] font-Nunito font-medium px-4'>Conversations</h2> */}
            <div className='flex items-center gap-[15px] ps-[1rem] mt-[1rem]'>
                <h2 className='bg-[#22D1EE] py-1 px-5 text-[14px] font-Mulish font-normal text-center rounded-full cursor-pointer' onClick={() => handleTabClick('doctors')}>Doctors</h2>
                <h2 className='bg-[#22D1EE] py-1 px-5 rounded-full text-[14px] font-Mulish font-normal cursor-pointer' onClick={() => handleTabClick('patients')}>Patients</h2>
            </div>
            <div className='h-[370px] overflow-y-auto' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                {activeTab === 'doctors' && (
                    <div>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => (
                                <div key={contact._id} onClick={() => handleClick(contact)} className={`flex items-center gap-[10px] mt-[1rem] px-4 py-2 cursor-pointer ${selectedChatData && selectedChatData._id === contact._id ? "bg-[#f1f1f111] hover:bg-[#f1f1f111]" : "hover:bg-[#f1f1f111]"}`}>
                                    <img src={contact?.profilePic || Avatar} alt="doctor" className={`w-[55px] h-[55px] object-cover rounded-full`} />
                                    <div>
                                        <h1 className='text-[14px] leading-[20px] font-normal font-Nunito capitalize'>{contact.firstName} {contact.lastName}</h1>
                                        <h1 className='text-[12px] leading-[20px] text-gray-400 font-normal font-Nunito capitalize'>{contact.profession}</h1>
                                        <p className={`text-[10px]`}>{contactStatuses[contact._id] === 'online' ? 'Online' : 'Offline'}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='px-4 py-2 text-center font-Nunito text-[17px] text-gray-500 mt-[5rem]'>
                                No contact found
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'patients' && (
                    <div>
                        {filteredPatientContacts.length > 0 ? (
                            filteredPatientContacts.map((contact) => (
                                <div key={contact._id} onClick={() => handleClick(contact)} className={`flex items-center gap-[10px] mt-[1rem] px-4 py-2 cursor-pointer ${selectedChatData && selectedChatData._id === contact._id ? "bg-[#f1f1f111] hover:bg-[#f1f1f111]" : "hover:bg-[#f1f1f111]"}`}>
                                    <img src={contact?.profilePic || Avatar} alt="doctor" className={`w-[55px] h-[55px] object-cover rounded-full`} />
                                    <div>
                                        <h1 className='text-[14px] leading-[20px] font-normal font-Nunito capitalize'>{contact.firstName} {contact.lastName}</h1>
                                        <h1 className='text-[12px] leading-[20px] text-gray-400 font-normal font-Nunito capitalize'>{contact.profession}</h1>
                                        <p className={`text-[10px]`}>{contactStatuses[contact._id] === 'online' ? 'Online' : 'Offline'}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='px-4 py-2 text-center font-Nunito text-[17px] text-gray-500 mt-[5rem]'>
                                No contact found
                            </div>
                        )}
                    </div>
                )}

            </div>
            {activeTab === 'doctors' && (
                <NewDm />
            )}
        </div>
    );
};

export default ContactsContainer;
