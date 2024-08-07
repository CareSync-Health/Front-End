import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import Navbar from '../../../Components/Navbar'
import moment from 'moment-timezone';

// Generate an array of dates starting from today
const generateDates = (days) => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push({
            day: date.toLocaleString('default', { weekday: 'short' }),
            date: date.getDate(),
            fullDate: date
        });
    }
    return dates;
};

// Generate time slots for Nigerian timezone
const generateTimes = () => {
    const times = [];
    const startTime = 0; // Starting from 12:00 AM
    const endTime = 24; // Ending at 11:45 PM

    for (let hour = startTime; hour < endTime; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const time = moment().tz("Africa/Lagos").set({ hour, minute, second: 0, millisecond: 0 });
            times.push(time.format('hh:mm A'));
        }
    }
    return times;
};

const BookAppointment = () => {
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        setDates(generateDates(7)); // Generate dates for the next 7 days
        setTimes(generateTimes()); // Generate time slots for Nigerian timezone
    }, []);

    useEffect(() => {
        if (dates.length > 0) {
            setSelectedDate(dates[0]);
        }
    }, [dates]);

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <Navbar />
                <div className='mt-[2rem] xs:px-[10px] lg:px-[30px] mb-[4rem]'>
                    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                            <button className="text-lg">&lt;</button>
                            <h2 className="text-xl font-bold">{selectedDate ? selectedDate.fullDate.toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Loading...'}</h2>
                            <button className="text-lg">&gt;</button>
                        </div>
                        <div className="flex space-x-2 mb-4 overflow-x-auto">
                            {dates.map((date) => (
                                <button
                                    key={date.fullDate}
                                    className={`p-2 rounded ${selectedDate && selectedDate.date === date.date ? 'bg-black text-white' : 'bg-gray-100'}`}
                                    onClick={() => setSelectedDate(date)}
                                >
                                    <div>{date.day}</div>
                                    <div>{date.date}</div>
                                </button>
                            ))}
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg mb-2">Time in Nigerian Timezone</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {times.map((time) => (
                                    <button
                                        key={time}
                                        className={`p-2 rounded ${selectedTime === time ? 'bg-black text-white' : 'bg-gray-100'}`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="w-full py-2 bg-purple-600 text-white rounded-lg">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment