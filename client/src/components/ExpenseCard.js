import React from "react";


function ExpenseCard( { expense } ) {


  return (
    <div className="expense-card">
      <h3 className="category-name">{expense.category.name}</h3>
      <ul key={expense.id}>
            <li className="expense-list">{expense.description}</li>
            <li className="expense-list">{expense.amount}</li>
          </ul>
    </div>
  )
}


export default ExpenseCard;