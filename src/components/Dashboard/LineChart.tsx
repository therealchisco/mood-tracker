import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale, // x axis
  LinearScale, // y axis
  PointElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

ChartJS.register(
  LineElement,
  TimeScale, // x axis
  LinearScale, // y axis
  PointElement,
  Filler
);

function LineChart() {
  const lbls = [
    "2023-04-10",
    "2023-04-11",
    "2023-04-12",
    "2023-04-13",
    "2023-04-14",
    "2023-04-15",
    "2023-04-16",
  ];

  const data = {
    // labels: ["10AM", "11AM", "12PM", "1PM", "2PM"],
    labels: lbls,
    datasets: [
      {
        data: [4.3, 3.4, 2, 4, 4.3, 3.4, 5.4, 3.8, 2, 5],
        borderColor: "orange",
        backgroundColor: "rgb(253, 227, 167)",
        fill: true,
        borderWidth: 5,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: "day" as const,
        },
      },
      y: {
        min: 0,
        max: 6,
      },
    },
  };

  return (
    <div className="align-items-center chart">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
