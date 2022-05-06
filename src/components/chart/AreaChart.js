import ChartCard from "./ChartCard.js";
import { Line } from "react-chartjs-2";
import { UserData } from "./UserData";
import { useState } from "react";
import Chart from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
const chartDataSource = {
  labels: UserData.newHire.map((data) => data.date),
  datasets: [
    {
      label: "Attrition Rate",
      data: UserData.newHire.map((data) => data.rate),
      //   backgroundColor: "white",
      borderColor: "white",
      borderWidth: 1,
      pointBackgroundColor: "white",
      pointBorderWidth: 2,
      //   pointRadius: 1,
      fill: { target: "origin", above: "green", below: "blue" },
      shape: "shape",
      tension: 0.2,
      pointHoverBackgroundColor: "yellow",
    },
  ],
};

export default function AreaChart() {
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
              paddingLeft: 40,
              position: "top",
              font: { size: 20 },
            },
            legend: {
              align: "start",
              position: "top",
              labels: {
                color: "white",
                paddingLeft: 40,
                boxWidth: 0,
              },
            },
          },
          // layout: { marginBottom: 0, paddingBottom: 40 },
          scales: {
            x: {
              ticks: {
                display: false,
                color: "white",
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
