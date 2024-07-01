import { useState, useEffect } from 'react';
import { LineChart } from '@tremor/react';

const generateChartData = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // Get current month index (0 for January, 11 for December)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const chartdata = [];

  for (let i = 0; i <= currentMonth; i++) {
    const month = months[i];
    const date = `${month} ${currentYear}`;
    const income = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000; // Example random income calculation

    chartdata.push({
      date,
      "Income in current month": income,
    });
  }

  return chartdata;
};

const LineChartHero = () => {
  const [chartData, setChartData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const newData = generateChartData();
    setChartData(newData);

    // Calculate total income from the beginning of the year up to the current month
    const total = newData.reduce((accumulator, currentValue) => {
      return accumulator + currentValue["Income in current month"];
    }, 0);
    setTotalIncome(total);
  }, []); // Run once on mount to initialize

  const dataFormatter = (number) =>
    `₦${Intl.NumberFormat('en-NG').format(number).toString()}`; // Formatting for Nigerian Naira

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
          categories={['Income in current month']}
          colors={['blue']}
          yAxisWidth={30}
          valueFormatter={dataFormatter}
        //   customTooltip={customTooltip}
          yAxisFormatter={(value) => dataFormatter(value)}
        />
    </div>
  );
};

export default LineChartHero;
