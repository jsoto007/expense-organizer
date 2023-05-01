import React from "react";
import Expenses from "./Expenses";

function ExpenseCard( { categorizeExpense } ) {


  return (
    <div className="expense-card">
      <h3 className="category-name">{categorizeExpense.name}</h3>
     
    </div>
  )
}


export default ExpenseCard;