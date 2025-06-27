"use client";
import { DEFAULT_ECG } from "@/lib/constants";
import { Line, CartesianGrid, LineChart, XAxis, YAxis } from "recharts";

type PointType = {
  time: number;
  value: number;
};

export default function Graph({ data }: { data: PointType[] }) {
  return (
    <div>
      <LineChart width={800} height={300}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="time" type="number" unit="s" />
        <YAxis dataKey="value" type="number" unit="mV" />
        <Line
          name="Modeled"
          data={DEFAULT_ECG}
          dataKey="value"
          dot={false}
          type="monotone"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
}
