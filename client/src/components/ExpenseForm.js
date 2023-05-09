import React, { useState } from "react";
import { useHistory }  from "react-router-dom"
import CategoryMenu from "./CategoryMenu";

function ExpenseForm() {
  const [expenseData, setExpenseData] = useState({
    amount: "",
    description: "",
    category_id: ""
  
  })

  
  let history = useHistory();

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
        history.push('./')
      })
    }

    function handleChange(e) {
      const key = e.target.name;
      setExpenseData({
        ...expenseData, 
        [key]: e.target.value
      })

    }

    console.log("Expense form ", expenseData)

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
      <CategoryMenu  setExpenseData={setExpenseData} expenseData={expenseData}/>
      <button type="submit">Add Expense</button>
    </form>
    </div>
  )
}


export default ExpenseForm;