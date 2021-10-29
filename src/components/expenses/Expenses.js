import { useState } from "react";
import Card from "../wrapper/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  const filteredExpenses = filterExpenses(filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilterExpense={filterExpenseHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
