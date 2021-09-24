import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const onSaveExpenseDataHandler = (inputExpense) => {
    const newExpense = {
      ...inputExpense,
      id: Math.random(),
    };
    props.onSaveExpenseData(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
