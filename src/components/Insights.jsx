import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTotalIncome, getTotalExpenses, getTopCategory } from "../utils/calculations";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const totalIncome = getTotalIncome(transactions);
  const totalExpenses = getTotalExpenses(transactions);
  const topCategory = getTopCategory(transactions) || "N/A";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:scale-105 transition">
        <h2 className="font-semibold text-gray-700 dark:text-gray-200">Total Income</h2>
        <p className="text-xl font-bold mt-2 text-gray-900 dark:text-white">₹{totalIncome}</p>
      </div>

      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:scale-105 transition">
        <h2 className="font-semibold text-gray-700 dark:text-gray-200">Total Expenses</h2>
        <p className="text-xl font-bold mt-2 text-gray-900 dark:text-white">₹{totalExpenses}</p>
      </div>

      <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:scale-105 transition">
        <h2 className="font-semibold text-gray-700 dark:text-gray-200">Top Spending Category</h2>
        <p className="text-xl font-bold mt-2 text-gray-900 dark:text-white">{topCategory}</p>
      </div>
    </div>
  );
};

export default Insights;