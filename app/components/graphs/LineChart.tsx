import { Chart, registerables, CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

import { useState, useEffect } from "react";

Chart.register(...registerables);
Chart.register(CategoryScale);

interface MonthDays {
  [key: string]: number;
}

const juneDays = 30;
const julyDays = 31;
const augustDays = 31;
const septDays = 30;

const monthDays: MonthDays = {
  June: juneDays,
  July: julyDays,
  August: augustDays,
  Sept: septDays,
};

const LineChart = () => {
  const [tempData, setTemps] = useState([]);

  useEffect(() => {
    fetch("/api/seattle_weather")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemps(data)
      });
  }, []);

  const labels: string[] = [];
  for (const month in monthDays) {
    const daysInMonth = monthDays[month];
    Array.from({ length: daysInMonth }, (_, day) => {
      labels.push(`${month} ${day + 1}`);
    });
  }

  const datasets = tempData.map((data, index) => ({
    label: `Data ${2015 + index}`,
    data: data,
    fill: false,
    backgroundColor: `rgba(${30 + index * 50}, ${192}, ${192}, 0.6)`,
    borderColor: `rgba(${30 + index * 50}, ${192}, ${192}, 1)`,
    tension: 0.1,
  }));

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comparison of Temperature (2015 - 2024)",
      },
    },
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        border: "1px solid #ccc",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
