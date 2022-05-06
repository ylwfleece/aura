// import Chart from "chart.js";
import BChart from "./BChart";
import LChart from "./LChart";
import AChart from "./AChart";
export default function ChartArea(props) {
  return (
    <div
      style={{
        width: 1000,
        height: 180,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <LChart />
      <AChart />
      <BChart />
    </div>
  );
}
