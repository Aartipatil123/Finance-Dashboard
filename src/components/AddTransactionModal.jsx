// components/AddTransactionModal.jsx
import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields!");
      return;
    }

    addTransaction({
      title,
      amount: parseFloat(amount),
      type,
      category,
      date,
    });

    // Reset form
    setTitle("");
    setAmount("");
    setType("Expense");
    setCategory("");
    setDate("");

    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          />
          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;