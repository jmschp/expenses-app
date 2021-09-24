import { useState } from 'react'
import Card from "../wrapper/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, SetYear] = useState("2019");

  const filterExpenseHandler = (selectedYear) => {
    SetYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
