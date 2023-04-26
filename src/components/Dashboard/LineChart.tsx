import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale, // x axis
  LinearScale, // y axis
  PointElement,
} from "chart.js";

import "chartjs-adapter-date-fns";

ChartJS.register(
  LineElement,
  TimeScale, // x axis
  LinearScale, // y axis
  PointElement
);

const getHoursArray = () => {
  var timeArray = [];
  for (var i = 0; i < 10; i++) {
    var hour = i < 10 ? "0" + i : i;
    timeArray.push(hour + ":00");
    timeArray.push(hour + ":30");
  }
  return timeArray;
};

function LineChart() {
  const data = {
    // labels: ["10AM", "11AM", "12PM", "1PM", "2PM"],
    labels: [
      "2023-04-10",
      "2023-04-11",
      "2023-04-12",
      "2023-04-13",
      "2023-04-14",
      "2023-04-15",
    ],
    datasets: [
      {
        labels: "Days of the week",
        data: [4.3, 3.4, 2, 4.3, 4, 5.4, 3.8, 2, 5],
        backgro8ndColor: "blue",
        borderColor: "orange",
        borderWidth: 5,
        pintBorderColor: "blue",
        tension: 0.3,
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
    <div className="d-flex align-items-center sriks">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
