import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";


function EditExpense( { expense, toggleEdit, setToggleEdit } ) {

  const {currentUser, setCurrentUser} = useContext(UserContext);

  const {id, description, amount, category_id} = expense

  const [patchedExpense, setPatchedExpense] = useState({
    id: `${id}`,
    description: `${description}`,
    amount: `${amount}`, 
    category_id: `${category_id}`
  });

  function handlePatchSumit(e) {
    e.preventDefault();

    fetch(`/expenses/${id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(patchedExpense),
    })
    .then((resp) => resp.json())
    .then((editedExpense) => handlePatchedCategory(editedExpense))

    setToggleEdit((toggleEdit) => !toggleEdit)
  }

  function handleChange(e) {
    const key = e.target.id
    setPatchedExpense({
      ...patchedExpense, 
      [key]: e.target.value
    })
  }

  function handlePatchedCategory(editedExpense) {
    const updateExpenses = currentUser.expenses.filter((expense) => expense.id !== editedExpense.id)
    setCurrentUser({
      ...currentUser, 
      expenses: [editedExpense, ...updateExpenses]
    })
  }

  return (
    <div>
      <form className="edit-expense-form" onSubmit={handlePatchSumit} >
      <label for="description">Description | </label>
        <input
          type="text"
          name="description"
          value={patchedExpense.description}
          id="description"
          onChange={handleChange}
          />
          <br></br>
          <label for="amount">Amount | </label>
          <input
            type="integer"
            name="amount"
            value={patchedExpense.amount}
            id="amount"
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default EditExpense
