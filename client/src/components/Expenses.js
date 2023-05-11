import React, { useContext } from "react";
import ExpenseCard from "./ExpenseCard";
import { ExpenseContext } from "../context/ExpenseContextProvider";

function Expenses() {

  const {expenseData} = useContext(ExpenseContext)

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