import React, { useState, useEffect } from "react";


function Expenses() {

  const [userExpense, setUserExpense] = useState([])

  useEffect(()=> {
    fetch('/expenses')
    .then(resp => resp.json())
    .then(setUserExpense)
  }, [])

  console.log(userExpense)
  return (
    <div>
      {userExpense.map((expense) => {
        return (
          <ul key={expense.id}>
            <li className="expense-list">{expense.description}</li>
            <li className="expense-list">{expense.amount}</li>
            <li className="expense-list">{expense.category.name}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Expenses;