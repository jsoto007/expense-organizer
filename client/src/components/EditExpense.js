import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContextProvider";

function EditExpense( { expense } ) {

  const {expenseData, setExpenseData} = useContext(ExpenseContext);


  const {id, description, amount, category} = expense

  const [patchedExpense, setPatchedExpense] = useState({
    id: `${id}`,
    description: `${description}`,
    amount: `${amount}`, 
    category_id: `${category.id}`
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
  }

  function handleChange(e) {
    const key = e.target.id
    setPatchedExpense({
      ...patchedExpense, 
      [key]: e.target.value
    })
  }

  function handlePatchedCategory(editedExpense) {
    const updateExpenses = expenseData.filter((expense) => expense.id !== editedExpense.id)
    setExpenseData([editedExpense, ...updateExpenses])
  }

  return (
    <div>
      <form onSubmit={handlePatchSumit} >
        <input
          type="text"
          name="description"
          value={patchedExpense.description}
          id="description"
          onChange={handleChange}
          />
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
