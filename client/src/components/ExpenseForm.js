import React, { useState } from "react";

function ExpenseForm() {
  const [expenseData, setExpenseData] = useState({
    amount: 0,
    description: "",
    category_id: 28
  
  })

    function handleSubmit(e) {
      e.preventDefault();
      fetch(`/expenses`, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(expenseData)
      })
      .then(resp => {
        if (resp.ok){
          resp.json().then(data => setExpenseData(data))
        }
      })
    }

    function handleChange(e) {
      const key = e.target.name;
      setExpenseData({
        ...expenseData, 
        [key]: e.target.value
      })

    }
 
  return (
    <div>
   <form onSubmit={handleSubmit}>
        <input
          type="integer"
          name="amount"
          value={expenseData.amount}
          id="amount1"
          onChange={handleChange}
          placeholder="amount"
          className="expense-form"
        />
        <input
          type="text"
          name="description"
          value={expenseData.description}
          id="description1"
          onChange={handleChange}
          placeholder="description"
          className="expense-form"
        />
      <button type="submit">Add Expense</button>
    </form>
    </div>
  )
}


export default ExpenseForm;