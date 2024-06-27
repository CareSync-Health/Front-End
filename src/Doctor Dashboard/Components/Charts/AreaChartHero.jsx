import { useState, useEffect } from 'react';
import { AreaChart } from '@tremor/react';

const dataFormatter = (number) =>
  `₦${Intl.NumberFormat('us').format(number).toString()}`;

const generateChartData = () => {
  const currentYear = new Date().getFullYear();
  const chartdata = [];

  for (let i = 1; i <= 12; i++) {
    const month = `${currentYear}-${i}`;
    const patientsPrevYear = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000; // Example random data for previous year
    const patientsCurrentYear = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000; // Example random data for current year

    chartdata.push({
      date: month,
      [`Patients ${currentYear - 1}`]: patientsPrevYear,
      [`Patients ${currentYear}`]: patientsCurrentYear,
    });
  }

  return chartdata;
};

const AreaChartHero = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const newData = generateChartData();
    setChartData(newData);
  }, []); // Run once on mount to initialize

  return (
    <div>
      <h2 className="text-[20px] font-bold font-Inter mr-4 g-[5rem] text-[#25282B] ms-[0.6rem]">Hospital Survey</h2>
      <AreaChart
        className="h-80"
        data={chartData}
        index="date"
        categories={[`Patients ${new Date().getFullYear() - 1}`, `Patients ${new Date().getFullYear()}`]}
        colors={['yellow', 'blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={58}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
};

export default AreaChartHero;
