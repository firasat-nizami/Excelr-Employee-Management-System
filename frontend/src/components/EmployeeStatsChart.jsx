import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EmployeeStatsChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Employees",
        data: [5, 8, 6, 10, 9, 7],
        backgroundColor: "#1e3a8a",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Monthly Employee Joining Report",
      },
    },
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
