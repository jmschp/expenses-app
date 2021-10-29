import Chart from "../Chart/Chart";

export default function ExpensesChart(props) {
  const expensesDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Set", value: 0 },
    { label: "Out", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    let expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    expensesDataPoints[expenseMonth].value += expense.amount
  }

  return <Chart dataPoints={expensesDataPoints} />;
}
