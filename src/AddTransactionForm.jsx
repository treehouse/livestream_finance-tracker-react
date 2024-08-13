import React, { useState } from "react";

const AddTransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const finalAmount = isExpense
      ? -Math.abs(parseFloat(amount))
      : parseFloat(amount);
    addTransaction({ description, amount: finalAmount, category });
    setDescription("");
    setAmount("");
    setCategory("");
    setIsExpense(false);
  };

  return (
    <form onSubmit={onSubmit} className="transaction-form">
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          id="expense"
          checked={isExpense}
          onChange={(e) => setIsExpense(e.target.checked)}
        />
        <label htmlFor="expense">Expense</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
