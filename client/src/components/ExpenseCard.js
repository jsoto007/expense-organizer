import React from "react";
import Expenses from "./Expenses";

function ExpenseCard( { expense } ) {

  return (
    <div>
      <h3>{expense.summary}</h3>
      <ul className="expenses-li">
        <li><b>Description | </b>{expense.description}</li>
        <li><b>Amount | </b>{expense.amount}</li>
        <li id="category-li"><b>Category | </b>{expense.category.name}</li>
      </ul>
     
    </div>
  )
}


export default ExpenseCard;