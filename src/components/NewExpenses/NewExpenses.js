import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const onSaveExpenseDataHandler = (inputExpense) => {
    const newExpense = {
      ...inputExpense,
      id: Math.random(),
    };
    props.onSaveExpenseData(newExpense);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={showFormHandler}>
          Add new Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} hideForm={hideFormHandler} />
      )}
    </div>
  );
}
