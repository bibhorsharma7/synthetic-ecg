import Graph from "./components/graph";

const d = [
  { time: 0, value: 4 },
  { time: 1, value: 2 },
  { time: 2, value: 3 },
  { time: 3, value: 1 },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-red-50 p-4">
      <Graph data={d} />
      <span>Parameters here</span>
    </div>
  );
}
