// src/pages/Transactions.jsx
import React, { useContext, useState } from "react";
import TransactionTable from "../components/TransactionTable";
import AddTransactionModal from "../components/AddTransactionModal";
import { AppContext } from "../context/AppContext";

const Transactions = () => {
  const { role, transactions, addTransaction, deleteTransaction, setTransactions } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTx, setEditTx] = useState(null); // Track transaction being edited

  // Handle edit button click from table
  const handleEdit = (tx) => {
    setEditTx(tx);
    setIsModalOpen(true); // Open modal with pre-filled data
  };

  // Update transaction after editing
  const updateTransaction = (updatedTx) => {
    const updatedTransactions = transactions.map((tx) =>
      tx.id === updatedTx.id ? updatedTx : tx
    );
    setTransactions(updatedTransactions); // Update context
    setEditTx(null); // Reset edit state
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* Add Button for Admin */}
      {role === "Admin" && (
        <button
          onClick={() => {
            setEditTx(null); // Ensure no transaction is in edit mode
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
        >
          Add Transaction
        </button>
      )}

      {/* Transaction Table */}
      <TransactionTable
        transactions={transactions}
        role={role}
        deleteTransaction={deleteTransaction}
        editTransaction={handleEdit} // Pass edit handler to table
      />

      {/* Add/Edit Transaction Modal */}
      {role === "Admin" && (
        <AddTransactionModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditTx(null);
          }}
          addTransaction={addTransaction}
          editTx={editTx} // Pass current transaction for editing
          updateTransaction={updateTransaction} // Pass update function
        />
      )}
    </div>
  );
};

export default Transactions;