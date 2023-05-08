import React from "react";
import Expenses from "./Expenses";

function ExpenseCard( { expense } ) {

  return (
    <div className="expense-card">
      <h3>{expense.summary}</h3>
      <ul>
        <li>{expense.description}</li>
        <li>{expense.amount}</li>
      </ul>
     
    </div>
  )
}


export default ExpenseCard;