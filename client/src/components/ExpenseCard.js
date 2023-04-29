import React from "react";

function ExpenseCard( { expense } ) {


  return (
    <div>
      <h3>{expense.category.name}</h3>
      <ul key={expense.id}>
            <li className="expense-list">{expense.description}</li>
            <li className="expense-list">{expense.amount}</li>
            <li className="expense-list">{expense.category.name}</li>
          </ul>
    </div>
  )
}


export default ExpenseCard;