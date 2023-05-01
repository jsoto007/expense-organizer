import React, { useState, useEffect } from "react";
import ExpenseCard from "./ExpenseCard";


function Expenses() {

  const [categorizeExpense, setCategorizeExpense] = useState([])

  useEffect(()=> {
    fetch('/categories')
    .then(resp => resp.json())
    .then(setCategorizeExpense)
  }, [])

  console.log(categorizeExpense)
  return (
    <div>
      {categorizeExpense.map((expense) => {
        return (
          <ExpenseCard  key={expense.key} categorizeExpense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;