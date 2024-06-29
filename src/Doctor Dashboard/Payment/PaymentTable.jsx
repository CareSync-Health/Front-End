import React, { useState } from 'react';
import avatar from '../../assets/avatar.png';

const PaymentTable = () => {
    const Payments = [
        { date: "John Doe", activity: "john.doe@example.com", description: "2024-06-27", from: "10:00 AM", order: "Dr. Smith", amount: "Flu", status: 'Pending' },
        { date: "Jane Smith", activity: "jane.smith@example.com", description: "2024-06-28", from: "11:30 AM", order: "Dr. Adams", amount: "Allergies", status: 'Paid' },
        // { date: "Michael Johnson", activity: "michael.johnson@example.com", description: "2024-06-29", from: "1:00 PM", order: "Dr. Brown", amount: "Checkup", status: 'Paid' },
        // { date: "Emily Davis", activity: "emily.davis@example.com", description: "2024-06-30", from: "2:30 PM", order: "Dr. Miller", amount: "Back Pain", status: 'Paid' },
        // { date: "Christopher Garcia", activity: "christopher.garcia@example.com", description: "2024-07-01", from: "9:00 AM", order: "Dr. Lee", amount: "Headache", status: 'Paid' },
        // { date: "Daniel Wilson", activity: "daniel.wilson@example.com", description: "2024-07-02", from: "10:30 AM", order: "Dr. Thompson", amount: "Fever", status: 'Paid' },
        // { date: "Sophia Martinez", activity: "sophia.martinez@example.com", description: "2024-07-03", from: "12:00 PM", order: "Dr. White", amount: "Migraine", status: 'Paid' },
    ];

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

    const filteredPayments = Payments.filter(payments => 
        payments.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.order.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payments.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

    return (
        <div>
            <div className="bg-[#fff] w-full rounded-[10px] pt-[1.5rem] mt-[5rem] mb-[3rem]">
        <div className="overflow-x-auto">
            <div className='lg:px-[20px] xs:px-[10px]'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    className="border py-2 px-4 rounded-[100px] text-[13px] font-Inter font-medium lg:w-[40%] xs:w-[95%]"
                />
            </div>
                    <table className="min-w-full shadow-md overflow-hidden mt-[1rem]">
                        <thead className="bg-[#E8E8E8] text-white">
                            <tr>
                                <th className="text-left py-5 px-5 text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Date</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Activity</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Description</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">From</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Order</th>
                                <th className="text-left py-5 px-5 w-[20%] text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Amount</th>
                                <th className="text-left py-5 px-5 text-[#25282B] text-[14px] font-bold font-Inter leading-[20px]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentItems.map((payments, index) => (
                                <tr key={index}>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.date}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.activity}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.description}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.from}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.order}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.amount}</td>
                                    <td className="py-4 px-5 text-[14px] text-[#52575C] font-Inter font-normal leading-[20px]">{payments.status}</td>
                                </tr>
                            ))}
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