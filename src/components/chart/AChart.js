import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { UserData, data } from "./UserData";

import ChartCard from "./ChartCard.js";

export default function AChart() {
  return (
    <ChartCard>
      <AreaChart
        style={{
          backgroundColor: "#5ebeba",
        }}
        width={320}
        height={120}
        data={data}
        margin={{ top: 10 }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />

        <Legend
          iconSize={5}
          iconType="circle"
          verticalAlign="top"
          height={36}
          content={
            <div
              style={{
                paddingLeft: 30,
                color: "white",
                textAlign: "left",
              }}
            >
              <h3>{"Data"}</h3>
              <p>{"label"}</p>
            </div>
          }
        />
        <Area
          fillOpacity={1}
          stroke="white"
          dataKey="uv"
          fill="#89f0eb"
          dot={{ stroke: "white", fill: "white" }}
          activeDot={{ stroke: "red", fill: "red" }}
        />
      </AreaChart>
    </ChartCard>
  );
}
