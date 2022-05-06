import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { data, UserData } from "./UserData";

import ChartCard from "./ChartCard.js";

export default function BChart() {
  return (
    <ChartCard>
      <BarChart
        style={{
          backgroundColor: "#fa8080",
        }}
        width={320}
        height={120}
        data={data}
        margin={{ right: 30, left: 30, bottom: 0, top: 10 }}
      >
        {/* <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="name" hide />
        <YAxis hide />
         */}
        <Tooltip />

        <Legend
          verticalAlign="top"
          height={36}
          content={
            <div style={{ margin: 0, color: "white", textAlign: "left" }}>
              <h3>{"Data"}</h3>
              <p>{"label"}</p>
            </div>
          }
        />
        <Bar
          dataKey="uv"
          fill="white"
          barSize={5}
          activeBar={{ stroke: "red", fill: "red" }}

          // onMouseOver={() => {
          //   return { fill: "Red" };
          // }}
        />
      </BarChart>
    </ChartCard>
  );
}
