import React, {useContext} from "react";
import { DataContext } from "../context/DataContextProvider";


function DeleteExpense( { expense } ) {

  const { expenseData, setExpenseData } = useContext(DataContext)

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
    <button className="delete-btn" onClick={handleDeleteClick}> 🗑️</button>
  )
}

export default DeleteExpense;