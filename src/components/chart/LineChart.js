// import Chart from "chart.js";
import ChartCard from "./ChartCard.js";
import { Line } from "react-chartjs-2";

import { UserData } from "./UserData";
import { useState } from "react";
import Chart from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
const chartDataSource = {
  labels: UserData.activeEmployee.map((data) => data.date),
  datasets: [
    {
      label: "Attrition Rate",
      data: UserData.activeEmployee.map((data) => data.rate),
      backgroundColor: "white",
      borderColor: "white",
      borderWidth: 1,
      pointBackgroundColor: "transparent",
      pointBorderColor: "white",
      pointWidth: 3,

      pointRadius: 3,
      tension: 0.1,
      pointHoverBackgroundColor: "yellow",
    },
  ],
};

function LineChart() {
  const [chartData, setchartData] = useState(chartDataSource);
  const showDetail = (e) => {
    setchartData((pre) => {
      console.log(e.data);
      return { ...pre, backgroundColor: ["yellow"] };
    });
  };

  return (
    <ChartCard>
      <Line
        // onHover={showDetail}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Title",
              color: "white",
              align: "start",
              position: "top",
              font: { size: 20 },
            },
            legend: {
              align: "start",
              position: "top",
              labels: {
                color: "white",
                padding: 0,
                boxWidth: 0,
              },
            },
          },
          layout: {
            padding: {
              left: 40,
              right: 40,
              marginBottom: 0,
              paddingBottom: 20,
            },
          },

          scales: {
            myScale: {
              position: "center",
            },
            x: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawTicks: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawTicks: false,
              },
            },
          },
        }}
      ></Line>
    </ChartCard>
  );
}

export default LineChart;
