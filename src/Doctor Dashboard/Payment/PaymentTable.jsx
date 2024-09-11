import React, { useEffect, useState } from 'react';
import avatar from '../../assets/avatar.png';
import { useTheme } from '../Components/ThemeContext';
import { config } from '@/Redux/Config';
import moment from 'moment';

const PaymentTable = ({ doctorId }) => {
    const { theme, appearance } = useTheme()
    const [payments, setPayments] = useState([]);


    // const Payments = [
    //     { amount: "NGN 20,000", reference: "T871567270219956", channel: "card", paidOn: "Wednesday, September 11, 2024 4:41 PM", status: 'Pending' },
    //     { amount: "NGN 10,000", reference: "jT871567270219979", channel: "transfer", paidOn: "Wednesday, September 10, 2024 4:41 PM", status: 'Successful' },
    // ];

    const url = config.liveUrl

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${url}/doctor/payments/${doctorId}`); // Use the new endpoint
                const data = await response.json();
                console.log(data)
                if (data.success) {
                    setPayments(data.payments);
                    console.log(data.payments);
                } else {
                    console.log(data.message);
                }
            } catch (error) {
                // console.log('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, [doctorId]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to the first page on new search
    };

    const filteredPayments = payments.filter(payment =>
        payment.amount.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        moment(payment.paidOn).format('dddd, MMMM D, YYYY h:mm A').toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

    return (
        <div>
            <div className={`w-full rounded-[10px] pt-[1.5rem] mt-[5rem] mb-[3rem] ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <div className="overflow-x-auto">
                    <div className='lg:px-[20px] xs:px-[10px]'>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className={`border py-2 px-4 rounded-[100px] text-[13px] outline-none font-Inter font-medium lg:w-[40%] xs:w-[95%] ${theme === 'dark' ? "bg-gray-800" : theme === 'light' ? 'bg-[#fff]' : 'bg-gray-100'}`}
                        />
                    </div>
                    <table className="min-w-full shadow-md overflow-hidden mt-[1rem]">
                        <thead className={`${theme === 'dark' ? 'bg-gray-700' : theme === 'light' ? 'bg-[#E8E8E8]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            <tr>
                                <th className="text-left py-5 px-5 w-[20%] text-[14px] font-bold font-Inter leading-[20px]">Amount</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[14px] font-bold font-Inter leading-[20px]">Reference</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[14px] font-bold font-Inter leading-[20px]">Channel</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[14px] font-bold font-Inter leading-[20px]">Paid On</th>
                                <th className="text-left py-5 px-5 text-[14px] font-bold font-Inter leading-[20px]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* {payments ? ( */}
                            <>
                                {currentItems.map((payment, index) => (
                                    <tr key={index}>
                                        <td className="py-4 px-5 text-[14px] font-Inter font-normal leading-[20px]">NGN {payment.amount?.toLocaleString()}</td>
                                        <td className="py-4 px-5 text-[14px] font-Inter font-normal leading-[20px]">{payment.reference}</td>
                                        <td className="py-4 px-5 text-[14px] font-Inter font-normal leading-[20px]">{payment.channel}</td>
                                        <td className="py-4 px-5 text-[14px] font-Inter font-normal leading-[20px]">{moment(payment.paidOn).format('dddd, MMMM D, YYYY h:mm A')}</td>
                                        <td className="py-4 px-5 text-[14px] font-Inter font-normal leading-[20px]">{payment.status}</td>
                                    </tr>
                                ))}
                            </>
                            {/* // ) : (
                            //     <p>No Transactions yet</p>
                            // )} */}
                        </tbody>
                    </table>
                    <div className="flex lg:justify-end xs:justify-start gap-[1rem] items-center mt-4 px-5 pb-[10px]">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] text-center ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
                        >
                            Previous
                        </button>
                        <span className="text-[#52575C] text-[13px] font-normal font-Inter">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`px-2 py-1 rounded-md text-[13px] font-medium font-Inter leading-[20px] ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#22D1EE] text-white hover:bg-[#22cfeeb2]'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentTable;