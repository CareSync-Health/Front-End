import { useState, useEffect } from 'react';
import { LineChart } from '@tremor/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAppointments } from '@/Redux/Actions/BookAppointmentAction'; // Adjust import path as needed

const LineChartHero2 = () => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const { appointments = [] } = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  useEffect(() => {
    if (appointments && appointments.length) {
      const newData = generateChartData(appointments);
      setChartData(newData);

      // Calculate total income for all weeks up to the current week
      const total = newData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue["Income in current week"];
      }, 0);
      setTotalIncome(total);
    }
  }, [appointments]);

  // Generate data for all weeks up to the current week
  const generateChartData = (appointments) => {
    const currentYear = new Date().getFullYear();
    const currentWeek = getWeekNumber(new Date());
    const chartData = [];

    for (let week = 1; week <= 52; week++) {
      const date = `Week ${week}, ${currentYear}`;
      const income = week <= currentWeek
        ? calculateWeeklyIncome(appointments, week, currentYear)
        : 0; // Generate income only for weeks up to current week

      chartData.push({
        date,
        "Income in current week": income,
      });
    }

    return chartData;
  };

  // Calculate income for a specific week
  const calculateWeeklyIncome = (appointments, week, year) => {
    return appointments
      .filter(app => {
        const appDate = new Date(app.appointmentDate);
        const appWeek = getWeekNumber(appDate);
        return appWeek === week && appDate.getFullYear() === year;
      })
      .reduce((acc, app) => acc + parseFloat(app.pricing || 0), 0);
  };

  // Helper function to get the week number of a given date
  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const dataFormatter = (number) =>
    `₦${Intl.NumberFormat('en-NG').format(number)}`;

  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload || payload.length === 0) return null;
    const dataKey = payload[0].dataKey;
    const value = payload[0].value;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        <p className="text-tremor-content">{dataKey}</p>
        <p className="font-medium text-tremor-content-emphasis">
          {dataFormatter(value)}
        </p>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-[19px] font-Inter font-bold text-start">
        Total Income: {dataFormatter(totalIncome)}
      </h3>
      <LineChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        categories={['Income in current week']}
        colors={['yellow']}
        yAxisWidth={30}
        valueFormatter={dataFormatter}
        customTooltip={customTooltip}
        yAxisFormatter={(value) => dataFormatter(value)}
      />
    </div>
  );
};

export default LineChartHero2;