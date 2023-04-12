import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Synthetic ECG Signal",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const data = {
  labels,
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133],
      label: "Applied",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    },
    {
      data: [70, 90, 44, 60, 83, 90, 100],
      label: "Accepted",
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    },
    {
      data: [10, 21, 60, 44, 17, 21, 17],
      label: "Pending",
      borderColor: "#ffa500",
      backgroundColor: "#ffc04d",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 0, 16],
      label: "Rejected",
      borderColor: "#c45850",
      backgroundColor: "#d78f89",
      fill: false,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
