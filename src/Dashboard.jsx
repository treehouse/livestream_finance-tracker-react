import React from "react";

const Dashboard = ({ income, expenses, balance }) => {
  return (
    <div className="dashboard">
      <div className="card income-card">
        <h2>Income</h2>
        <p>${income.toFixed(2)}</p>
      </div>
      <div className="card expenses-card">
        <h2>Expenses</h2>
        <p>${expenses.toFixed(2)}</p>
      </div>
      <div className="card balance-card">
        <h2>Balance</h2>
        <p>${balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Dashboard;
