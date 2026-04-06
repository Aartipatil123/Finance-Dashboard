import React, { useContext } from "react";
import Insights from "../components/Insights";
import Charts from "../components/Charts"; 
import { AppContext } from "../context/AppContext";

const InsightsPage = () => {
  const { transactions } = useContext(AppContext);

  // Example logic for insights
  const totalByCategory = transactions.reduce((acc, t) => {
    if (!acc[t.category]) acc[t.category] = 0;
    acc[t.category] += t.amount;
    return acc;
  }, {});

  const topCategory = Object.entries(totalByCategory).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Insights</h1>

      {/* Insights cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Insights title="Top Spending Category" value={`${topCategory[0]} - ₹${topCategory[1]}`} />
        {/* Add more insights as needed */}
      </div>

      {/* Optional charts */}
      <div className="mt-6">
        <Charts transactions={transactions} />
      </div>
    </div>
  );
};

export default InsightsPage;