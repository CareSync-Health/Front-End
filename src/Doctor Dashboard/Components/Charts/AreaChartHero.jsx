import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { AreaChart } from '@tremor/react';
import { getAllAppointments } from '@/Redux/Actions/BookAppointmentAction';
import { useParams } from 'react-router-dom';
import { getDoctorEarnings } from '@/Redux/Actions/DoctorActions';

// Local dataFormatter function
const dataFormatter = (number) =>
  `₦${Intl.NumberFormat('en-US').format(number).toString()}`;

const AreaChartHero = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const doctorId = id;
  const [chartData, setChartData] = useState([]);
  const { appointments = [] } = useSelector((state) => state.appointments);
  const earnings = useSelector((state) => state.getTotalEarnings.earnings)

  useEffect(() => {
    dispatch(getAllAppointments(doctorId));
    dispatch(getDoctorEarnings(id));
  }, [dispatch, doctorId, id]);

  useEffect(() => {
    if (appointments && appointments.length) {
      console.log('Fetched Appointments:', appointments); // Log appointments data
      try {
        const formattedData = formatDataForChart(appointments, earnings);
        console.log('Formatted Chart Data:', formattedData); // Log formatted data
        setChartData(formattedData);
      } catch (error) {
        console.error('Error formatting chart data:', error);
      }
    }
  }, [appointments, earnings]);

  const formatDataForChart = (appointments, earnings) => {
    const months = Array.from({ length: 12 }, (_, i) => `${new Date().getFullYear()}-${String(i + 1).padStart(2, '0')}`);
    const data = months.map(month => {
      const filteredAppointments = appointments.filter(app => {
        const appointmentMonth = new Date(app.appointmentDate).toISOString().substring(0, 7); // YYYY-MM format
        return appointmentMonth === month;
      });

      const totalAppointments = filteredAppointments.length;

      // Compute total earnings for this month
      const earningsForMonth = filteredAppointments.reduce((acc, app) => acc + parseFloat(app.pricing || 0), 0);

      return {
        date: month,
        'Total Appointments': totalAppointments,
        'Total Earnings': earningsForMonth,
      };
    });

    console.log('Formatted Chart Data:', data);
    return data;
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold font-Inter mr-4 g-[5rem] ms-[0.6rem] mb-3">Hospital Survey</h2>
      {/* {chartData.length > 0 ? ( */}
        <AreaChart
          className="h-80"
          data={chartData}
          index="date"
          categories={['Total Appointments', 'Total Earnings']}
          colors={['yellow', 'blue']}
          valueFormatter={dataFormatter}
          yAxisWidth={58}
          onValueChange={(v) => console.log(v)}
        />
      {/* ) : ( */}
        {/* <p>No data available</p> */}
      {/* )} */}
    </div>
  );
};

export default AreaChartHero;
