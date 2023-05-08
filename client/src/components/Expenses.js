import React, { useState, useEffect } from "react";
import ExpenseCard from "./ExpenseCard";


function Expenses( { currentUser } ) {

  return (
    <div>
      {currentUser.expenses.map((expense) => {
        return (
          <ExpenseCard  key={expense.id} expense={expense} />
        )
      })}
    </div>
  )
}

export default Expenses;