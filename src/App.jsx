import React, { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import Dashboard from "./Dashboard";
import Header from "./Header";
import TransactionList from "./TransactionList";
import "./styles.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.amount > 0) {
      setIncome((prevIncome) => prevIncome + transaction.amount);
    } else {
      setExpenses(
        (prevExpenses) => prevExpenses + Math.abs(transaction.amount)
      );
    }
    setBalance((prevBalance) => prevBalance + transaction.amount);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Dashboard income={income} expenses={expenses} balance={balance} />
        <AddTransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
