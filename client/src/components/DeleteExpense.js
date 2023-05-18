import React, {useContext} from "react";
import { DataContext } from "../context/DataContextProvider";
import { UserContext } from "../context/UserContextProvider"

function DeleteExpense( { expense } ) {

  const { expenseData, setExpenseData } = useContext(DataContext)
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { id } = expense;
  
  function handleDeleteClick() {
    fetch(`/expenses/${id}`, {
      method: "DELETE", 
    })
    .then(handleDeleteUpdate(expense))
  }
                console.log("from DELETE", currentUser.expenses)

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