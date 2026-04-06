import React, { useContext } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";
import { AppContext } from "../context/AppContext";
import { BarChart3, PieChart } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

const Charts = () => {
  const { transactions } = useContext(AppContext);

  // Dynamic months
  const months = [...new Set(transactions.map(tx => tx.month))];
  const monthlyBalance = months.map(month => {
    const monthTx = transactions.filter(tx => tx.month === month);
    return monthTx.reduce((acc, tx) => tx.type === "Income" ? acc + tx.amount : acc - tx.amount, 0);
  });

  const lineData = {
    labels: months,
    datasets: [
      {
        label: "Monthly Balance",
        data: monthlyBalance,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  };

  // Dynamic categories
  const categories = [...new Set(transactions.map(tx => tx.category))];
  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categories.map(cat =>
          transactions.filter(tx => tx.category === cat).reduce((acc, tx) => acc + tx.amount, 0)
        ),
        backgroundColor: categories.map((_, i) => ["#F87171", "#3B82F6", "#FBBF24", "#34D399", "#A78BFA"][i % 5])
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Monthly Trend</h3>
          <BarChart3 className="text-blue-500" />
        </div>
        <div className="h-64">
          <Line data={lineData} />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Spending Breakdown</h3>
          <PieChart className="text-pink-500" />
        </div>
        <div className="h-64">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Charts;