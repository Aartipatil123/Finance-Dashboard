import React, { createContext, useState } from "react";
import { transactionsData } from "../data/Data";

// Create context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Role state
  const [role, setRole] = useState("Admin");

  // Transactions state
  const [transactions, setTransactions] = useState(transactionsData);

  // Dark mode state 
  const [darkMode, setDarkMode] = useState(false);

  // Add new transaction
  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        addTransaction,
        deleteTransaction,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};