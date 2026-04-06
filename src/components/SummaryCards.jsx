import React, { useContext } from "react";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { getTotalIncome, getTotalExpenses } from "../utils/calculations";

const SummaryCards = () => {
  const { transactions } = useContext(AppContext);

  const totalIncomeRaw = getTotalIncome(transactions);
  const totalExpenses = getTotalExpenses(transactions);

  // Net income = income - expenses
  const netIncome = totalIncomeRaw - totalExpenses;

  // Total balance = remaining amount
  const totalBalance = netIncome;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Total Balance */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-2xl p-5 transform hover:scale-105 transition duration-300">
        <div className="flex justify-between items-center">
          <p className="text-sm">Total Balance</p>
          <Wallet />
        </div>
        <h2 className="text-2xl font-bold mt-4">₹{totalBalance}</h2>
      </div>

      {/* Net Income */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-2xl p-5 transform hover:scale-105 transition duration-300">
        <div className="flex justify-between items-center">
          <p className="text-sm">Net Income</p>
          <TrendingUp />
        </div>
        <h2 className="text-2xl font-bold mt-4">₹{netIncome}</h2>
      </div>

      {/* Expenses */}
      <div className="bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg rounded-2xl p-5 transform hover:scale-105 transition duration-300">
        <div className="flex justify-between items-center">
          <p className="text-sm">Expenses</p>
          <TrendingDown />
        </div>
        <h2 className="text-2xl font-bold mt-4">₹{totalExpenses}</h2>
      </div>

    </div>
  );
};

export default SummaryCards;