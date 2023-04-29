import React, { useState, useEffect } from "react";
import ExpenseCard from "./ExpenseCard";


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
          <ExpenseCard expense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;