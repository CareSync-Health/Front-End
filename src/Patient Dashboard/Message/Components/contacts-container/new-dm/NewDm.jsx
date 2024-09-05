import React, { useState, useEffect } from 'react';
import { BiMessageAdd } from 'react-icons/bi';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../../../Components/ui/tooltip";
   
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "../../../../../Components/ui/dialog"
  
import { searchContact, setSelectedChatType, setSelectedChatData } from '@/Redux/Actions/DoctorActions';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollArea } from '../../../../../Components/ui/scroll-area';
import caresync from '../../../../../assets/CareSync.png'


const NewDm = () => {
    const [openNewContactModal, setOpenNewContactModal] = useState(false);
    const [searchedContacts, setSearchedContacts] = useState([]);
    const [term, setTerm] = useState('');  // Added state for search input
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.searchContacts.contacts || []);

    const searchContacts = async (searchTerm) => {
        setTerm(searchTerm); // Update search term state
        try {
            if (searchTerm.length > 0) {
                await dispatch(searchContact(searchTerm));
                setSearchedContacts(contact); // Update state with fetched contacts
            } else {
                setSearchedContacts([]); // Clear contacts if searchTerm is empty
            }
        } catch (error) {
            console.log(error);
        }
    };

    const selectNewContact = (contact) => {
        setOpenNewContactModal(false);
        dispatch(setSelectedChatType("contact"));
        dispatch(setSelectedChatData(contact));
        setSearchedContacts([]); // Clear searched contacts
    }

    return (
        <>
            <div className='absolute lg:bottom-5 right-0 lg:text-[22px] xs:text-[25px] lg:block xs:flex items-end justify-end pr-[2rem]'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className='bg-[#22D1EE] p-[10px] rounded-[100px] flex items-center justify-center cursor-pointer' onClick={() => setOpenNewContactModal(true)}>
                                <BiMessageAdd />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className={`ms-[-4rem] text-[12px] font-Nunito font-normal py-1 px-2 bg-[#FFFCF8]`}>
                            Select New Contact
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <Dialog open={openNewContactModal} onOpenChange={setOpenNewContactModal}>
                <DialogContent className={`border-none lg:w-[400px] xs:w-[90%] h-[400px] flex flex-col bg-[#FFFCF8]`}>
                    <DialogHeader>
                        <DialogTitle>Please select a contact</DialogTitle>
                    </DialogHeader>
                    <div>
                        <input
                            type='text' placeholder='Search Contacts'
                            className={`w-full p-1.5  outline-none text-[14px] font-Nunito font-normal rounded-[10px] bg-[#fff]`}
                            onChange={(e) => searchContacts(e.target.value)}
                        />
                    </div>


                    {
                        searchedContacts.length > 0 ? (
                            <ScrollArea className='h-[250px]'>
                                <div className='-ms-4 -mt-3'>
                                    {searchedContacts.map((contact) => (
                                        <div key={contact._id} onClick={() => selectNewContact(contact)}>
                                            <div className='flex gap-[2px] items-center cursor-pointer'>
                                                <img src={contact?.avatar || caresync} alt={`${contact?.firstName} ${contact?.lastName}`} className='w-[80px] rounded-full' />
                                                <div className='mt-3'>
                                                    <h2 className='text-[10px] text-gray-500 font-Nunito font-normal'>PROVIDER</h2>
                                                    <h2 className='text-[13px] font-Nunito capitalize'>{contact?.title} {contact?.firstName} {contact?.lastName}</h2>
                                                    <h2 className='text-[11px] font-Nunito font-normal'>{contact?.profession}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        ) : (
                            <div className='text-opacity-80 flex flex-col gap-5 items-center lg:text-2xl text-xl transition-all duration-300 text-center mt-5'>
                            {term === '' ? (
                                <h3 className='font-Nunito font-medium'>Hi <span className='text-[#22D1EE]'>!</span> Welcome to <span className='text-[#22D1EE]'> CareSync.</span></h3>
                            ) : (
                                <h3 className='font-Nunito font-medium'>Hi <span className='text-[#22D1EE]'>!</span> Search new <span className='text-[#22D1EE]'> Contact.</span></h3>
                            )}
                        </div>
                        )
                    }

                </DialogContent>
            </Dialog>
        </>
    );
}

export default NewDm;
