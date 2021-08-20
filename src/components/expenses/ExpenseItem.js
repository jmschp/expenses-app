import Card from "../wrapper/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">€ {props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;

// The HTML code returned by a React component must only have one root element.
// Valid:
// <div>
//    <div>
//    </div>
// </div>

// Invalid:
// <div>
// </div>
// <div>
// </div>

// Import the CSS file into the JavaScript file the the following statement:
// import "path/to/file.css";
// Unlike importing JavaScript files, we have to use the the .css extension, in order to the compiler understand it is a CSS file.
