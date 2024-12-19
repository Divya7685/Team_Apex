// import Link from "next/link";
// const Transaction = () => (
//     <div>
//         <h1>income</h1>
//         <h1>expense</h1>
//         <h1>balance</h1>
//         <Link href="/add-transaction">ADD TRANSACTION</Link>
//     </div>
// )

"use client";
import React, { useState, useEffect } from "react";
type Transaction = {
  description: string;
  amount: number;
  type: "Income" | "Expense";
  date: string;
};

const Transaction: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<"Income" | "Expense">("Income");
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  // Fetch transactions from localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Update localStorage and UI whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateUI(transactions);
  }, [transactions]);

  // Calculate and update balance, income, and expense
  const updateUI = (transactions: Transaction[]) => {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  };

  // Add a new transaction
  const addTransaction = () => {
    if (description && amount && !isNaN(parseFloat(amount))) {
      const newTransaction: Transaction = {
        description,
        amount: parseFloat(amount),
        type,
        date: new Date().toISOString(),
      };
      setTransactions([...transactions, newTransaction]);
      setDescription("");
      setAmount("");
      setType("Income");
      setShowAddTransaction(false); // Hide form after adding the transaction
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>Balance: ${balance.toFixed(2)}</p>
      <p>Income: ${income.toFixed(2)}</p>
      <p>Expense: ${expense.toFixed(2)}</p>

      {/* Button to show the Add Transaction form */}
      {!showAddTransaction && (
        <button onClick={() => setShowAddTransaction(true)}>Add Transaction</button>
      )}

      {/* Add Transaction Form */}
      {showAddTransaction && (
        <div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"/>
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"/>
          </div>
          <div>
            <label>Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "Income" | "Expense")}>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <button onClick={addTransaction}>Save</button>
          <button onClick={() => setShowAddTransaction(false)}>Cancel</button>
        </div>
      )}

      {/* Transactions Table */}
      <h2>Previous Transactions</h2>
      {transactions.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.description}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{transaction.type}</td>
                <td>{new Date(transaction.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};
export default Transaction;