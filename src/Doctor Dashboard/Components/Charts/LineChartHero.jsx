import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { LineChart } from '@tremor/react';
import { getAllAppointments } from '@/Redux/Actions/BookAppointmentAction';
import { useParams } from 'react-router-dom';
import { getDoctorEarnings } from '@/Redux/Actions/DoctorActions';

// Local dataFormatter function
const dataFormatter = (number) =>
  `₦${Intl.NumberFormat('en-NG').format(number).toString()}`; // Adjust locale for Naira

const LineChartHero = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const doctorId = id;
  const [chartData, setChartData] = useState([]);
  const { appointments = []} = useSelector((state) => state.appointments);
  const earnings = useSelector((state) => state.getTotalEarnings.earnings)

  useEffect(() => {
    dispatch(getAllAppointments(doctorId));
    dispatch(getDoctorEarnings(id));
  }, [dispatch, doctorId, id]);

  useEffect(() => {
    if (appointments && appointments.length) {
      try {
        const formattedData = formatDataForChart(appointments, earnings);
        setChartData(formattedData);
      } catch (error) {
        console.error('Error formatting chart data:', error);
      }
    }
  }, [appointments, earnings]);

  const formatDataForChart = (appointments) => {
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
        'Income in current month': earningsForMonth,
      };
    });

    console.log('Formatted Chart Data:', data);
    return data;
  };

  return (
    <div>
      <h3 className="text-[19px] font-Inter font-bold text-start">
        Total Income: {dataFormatter(earnings)}
      </h3>
      <LineChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        categories={['Income in current month']}
        colors={['blue']}
        yAxisWidth={30}
        valueFormatter={dataFormatter}
        yAxisFormatter={(value) => dataFormatter(value)}
      />
    </div>
  );
};

export default LineChartHero;