// utils/calculations.js

// Get total income (agar future me income transactions bhi add karna ho)
export const getTotalIncome = (transactions, fixedIncome = 80000) => {
  const incomeFromTx = transactions
    .filter(tx => tx.type === "Income")
    .reduce((acc, tx) => acc + tx.amount, 0);
  return fixedIncome + incomeFromTx; // Fixed + any income transactions
};

// Get total expenses
export const getTotalExpenses = (transactions) => {
  return transactions
    .filter(tx => tx.type === "Expense")
    .reduce((acc, tx) => acc + tx.amount, 0);
};

// Get total balance
export const getTotalBalance = (transactions, fixedIncome = 80000) => {
  const totalIncome = getTotalIncome(transactions, fixedIncome);
  const totalExpenses = getTotalExpenses(transactions);
  return totalIncome - totalExpenses;
};

// Get top spending category
export const getTopCategory = (transactions) => {
  const categoryTotals = {};
  transactions.forEach(tx => {
    if (tx.type === "Expense") {
      categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
    }
  });

  const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b,
    ""
  );

  return topCategory;
};

// Monthly spending summary (for chart)
export const getMonthlyExpenses = (transactions) => {
  const months = Array(12).fill(0);
  transactions.forEach(tx => {
    if (tx.type === "Expense") {
      const month = new Date(tx.date).getMonth(); // 0-11
      months[month] += tx.amount;
    }
  });
  return months;
};

// Category-wise spending summary (for Pie Chart)
export const getCategoryExpenses = (transactions) => {
  const categoryTotals = {};
  transactions.forEach(tx => {
    if (tx.type === "Expense") {
      categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
    }
  });
  return categoryTotals; // {Food: 2000, Rent: 10000, Travel: 5000, ...}
};