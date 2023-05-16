import React, { useContext } from "react";
import ExpenseCard from "./ExpenseCard";
import { UserContext } from "../context/UserContextProvider";




function Expenses() {

  const {currentUser} = useContext(UserContext)
 
 
  return (
    <div className="expense-card">
      {currentUser.expenses.map((expense) => {
        return (
          <ExpenseCard  key={expense.id} expense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;