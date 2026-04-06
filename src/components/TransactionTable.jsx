import React from "react";
import { Trash2, Edit } from "lucide-react";

const TransactionTable = ({ transactions, role, deleteTransaction, editTransaction }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Date</th>
            {role === "Admin" && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="px-4 py-2">{t.title}</td>
              <td className="px-4 py-2">₹{t.amount}</td>
              <td className="px-4 py-2">{t.type}</td>
              <td className="px-4 py-2">{t.category}</td>
              <td className="px-4 py-2">{t.date}</td>
              {role === "Admin" && (
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-700 transition"
                    onClick={() => editTransaction(t)} // Correct prop usage
                  >
                    <Edit size={16} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;