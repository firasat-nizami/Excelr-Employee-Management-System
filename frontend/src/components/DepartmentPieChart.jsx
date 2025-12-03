import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DepartmentPieChart() {
  const data = {
    labels: ["HR", "IT", "Finance", "Sales"],
    datasets: [
      {
        label: "Departments",
        data: [20, 50, 15, 25],
        backgroundColor: ["#1e3a8a", "#3b82f6", "#93c5fd", "#60a5fa"],
      },
    ],
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", marginTop: "20px" }}>
      <Pie data={data} />
    </div>
  );
}
