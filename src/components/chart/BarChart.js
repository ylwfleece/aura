import Chart from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

import ChartCard from "./ChartCard.js";
import { Bar } from "react-chartjs-2";

import { UserData } from "./UserData";
import { useState } from "react";

const chartDataSource = {
  labels: UserData.attritionRate.map((data) => data.date),
  datasets: [
    {
      label: "Attrition Rate",
      data: UserData.attritionRate.map((data) => data.rate),
      backgroundColor: ["white"],
      hoverBackgroundColor: "yellow",
      barThickness: 4,
    },
  ],
};

export default function BarChart() {
  const [chartData, setchartData] = useState(chartDataSource);

  return (
    <ChartCard>
      <Bar
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
          layout: { padding: { bottom: 0, left: 40, right: 40 } },
          scales: {
            // myScale: {
            //   position: "center",
            // },
            x: {
              title: { display: false },
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
      ></Bar>
    </ChartCard>
  );
}
