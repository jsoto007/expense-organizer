import React from "react";
import DeleteExpense from "./DeleteExpense";

function ExpenseCard( { expense } ) {

  return (
    <div>
      <h3>{expense.summary}</h3>
      <ul className="expenses-li">
        <li><b>Description | </b>{expense.description}</li>
        <li><b>Amount | </b>{expense.amount}</li>
        <li id="category-li"><b>Category | </b>{expense.category.name}</li>
      </ul>
      <DeleteExpense expense={expense} />
     
    </div>
  )
}


export default ExpenseCard;