import { useState, useEffect } from 'react';
import { LineChart } from '@tremor/react';

const LineChartHero2 = () => {
  const [chartData, setChartData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  // Generate data for all weeks up to the current week
  const generateChartData = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentWeek = getWeekNumber(new Date());
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weeksInMonth = getWeeksInMonth(currentMonth, currentYear);
    const chartdata = [];

    for (let week = 1; week <= weeksInMonth; week++) {
      const date = `Week ${week}, ${months[currentMonth]} ${currentYear}`;
      const income = week <= currentWeek ? Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000 : 0; // Generate income only for weeks up to current week

      chartdata.push({
        date,
        "Income in current week": income,
      });
    }

    return chartdata;
  };

  // Helper function to get the number of weeks in a given month
  const getWeeksInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)
    const lastDayOfWeek = lastDay.getDay();

    // Calculate number of weeks
    let weeks = Math.ceil((daysInMonth + firstDayOfWeek) / 7);
    if (firstDayOfWeek === 0 && lastDayOfWeek === 6) {
      weeks++;
    } else if (firstDayOfWeek === 0 || (lastDayOfWeek === 6 && firstDayOfWeek !== 0)) {
      weeks--;
    }
    return weeks;
  };

  // Helper function to get the week number of a given date
  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  useEffect(() => {
    const newData = generateChartData();
    setChartData(newData);

    // Calculate total income for all weeks up to the current week
    const total = newData.reduce((accumulator, currentValue) => {
      return accumulator + currentValue["Income in current week"];
    }, 0);
    setTotalIncome(total);
  }, []); // Run once on mount to initialize

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
      <h3 className="text-[#25282B] text-[19px] font-Inter font-bold text-start">
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
        //   customTooltip={customTooltip}
          yAxisFormatter={(value) => dataFormatter(value)}
        />
    </div>
  );
};

export default LineChartHero2;