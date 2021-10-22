import { useState } from "react";
import Card from "../wrapper/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setYear] = useState("");

  const filterExpenses = (filteredYear) => {
    if (filteredYear !== "") {
      const filteredExpenses = props.expensesList.filter((expense) => {
        return expense.date.getFullYear() === Number(filteredYear);
      });
      return filteredExpenses;
    } else {
      return props.expensesList;
    }
  };

  const filterExpenseHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expenses = <p>No expenses found</p>;

  if (filterExpenses(filteredYear).length > 0) {
    expenses = filterExpenses(filteredYear).map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      {expenses}
    </Card>
  );
}

export default Expenses;
