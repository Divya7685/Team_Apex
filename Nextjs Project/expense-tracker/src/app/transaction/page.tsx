// import Link from "next/link";
// const Transaction = () => (
//     <div>
//         <h1>income</h1>
//         <h1>expense</h1>
//         <h1>balance</h1>
//         <Link href="/add-transaction">ADD TRANSACTION</Link>
//     </div>
// )
// export default Transaction;


import React, { useState, useEffect } from "react";

type Transaction = {
  description: string;
  amount: number;
  type: "Income" | "Expense";
  date: string;
};

const ExpenseTracker: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<"Income" | "Expense">("Income");

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
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });

    setIncome(income);
    setExpense(expense);
    setBalance(income - expense);
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
      setShowModal(false);
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>Balance: <span id="balance">${balance.toFixed(2)}</span></p>
      <p>Income: <span id="income">${income.toFixed(2)}</span></p>
      <p>Expense: <span id="expense">${expense.toFixed(2)}</span></p>
      <button onClick={() => setShowModal(true)}>Add Transaction</button>

      {showModal && (
        <div style={{ display: "block" }}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "Income" | "Expense")}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button onClick={addTransaction}>Save</button>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
