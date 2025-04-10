"use client";
import { Line, CartesianGrid, LineChart, XAxis, YAxis } from "recharts";

type PointType = {
  time: number;
  value: number;
};

export default function Graph({ data }: { data: PointType[] }) {
  return (
    <div>
      <LineChart data={data} width={500} height={300}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="time" />
        <YAxis dataKey="value" />
        <Line
          name="Modeled"
          data={data}
          dataKey="value"
          dot={false}
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
}
