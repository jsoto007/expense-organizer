import React, { useState, useEffect } from "react";
import ExpenseCard from "./ExpenseCard";


function Expenses() {

  const [userExpenses, setUserExpenses] = useState([])

  useEffect(()=> {
    fetch('/users')
    .then(resp => resp.json())
    .then(setUserExpenses)
  }, [])
console.log("Expense CARD", userExpenses[0])
  return (
    <div>
      {userExpenses.map((expense) => {
        return (
          <ExpenseCard  key={expense.id} expense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;