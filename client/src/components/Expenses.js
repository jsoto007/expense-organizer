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
          <li key={expense.id}>{expense.description} | {expense.amount} | {expense.category.name}</li>
        )
      })}
    </div>
  )
}

export default Expenses;