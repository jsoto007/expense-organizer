import React, {useContext} from "react";
import { ExpenseContext } from "../context/ExpenseContextProvider";


function DeleteExpense( { expense } ) {

  const { expenseData, setExpenseData } = useContext(ExpenseContext)

  const { id } = expense;
  
  function handleDeleteClick() {
    fetch(`/expenses/${id}`, {
      method: "DELETE", 
    })
    .then(handleDeleteUpdate(expense))
  }

  function handleDeleteUpdate(deletedExpense) {
    const updateExpenses = expenseData.filter((exp) => exp.id !== deletedExpense.id);
    setExpenseData(updateExpenses);
  }

  return (
    <button onClick={handleDeleteClick}> X</button>
  )
}

export default DeleteExpense;