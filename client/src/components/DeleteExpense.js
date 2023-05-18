import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider"

function DeleteExpense( { expense } ) {

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { id } = expense;
  
  function handleDeleteClick() {
    fetch(`/expenses/${id}`, {
      method: "DELETE", 
    })
    .then(handleDeleteUpdate(expense))
  }

  function handleDeleteUpdate(deletedExpense) {
    const updateExpenses = currentUser.expenses.filter((exp) => exp.id !== deletedExpense.id);
    setCurrentUser({
      ...currentUser, 
      expenses: [...updateExpenses]
    })
  }

  return (
    <button className="delete-btn" onClick={handleDeleteClick}> 🗑️</button>
  )
}

export default DeleteExpense;