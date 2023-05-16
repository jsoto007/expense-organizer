import React, { useContext } from "react";
import ExpenseCard from "./ExpenseCard";
import { DataContext } from "../context/DataContextProvider";


function Expenses() {

  const {expenseData} = useContext(DataContext)
 
 
  return (
    <div className="expense-card">
      {expenseData.map((expense) => {
        return (
          <ExpenseCard  key={expense.id} expense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;