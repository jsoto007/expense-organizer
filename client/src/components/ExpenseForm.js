import React, { useState, useContext } from "react";
import { useHistory }  from "react-router-dom"
import CategoryMenu from "./CategoryMenu";
import { DataContext } from "../context/DataContextProvider";

function ExpenseForm() {

  const { expenseData, setExpenseData }  = useContext(DataContext);

  const [expenseForm, setExpenseForm] = useState({
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
        body:JSON.stringify(expenseForm)
      })
      .then(resp => {
        if (resp.ok){
          resp.json().then(data => handleAddExpense(data))
        }
        history.push('./expenses')
      })
    }

    function handleAddExpense(newExpense) {
      setExpenseData([...expenseData, newExpense])
    }
    
    function handleChange(e) {
      const key = e.target.name;
      setExpenseForm({
        ...expenseForm, 
        [key]: e.target.value
      })
    }

  return (
    <div>
   <form onSubmit={handleSubmit}>
        <input
          type="integer"
          name="amount"
          value={expenseForm.amount}
          id="amount1"
          onChange={handleChange}
          placeholder="amount"
          className="expense-form"
        />
        <input
          type="text"
          name="description"
          value={expenseForm.description}
          id="description1"
          onChange={handleChange}
          placeholder="description"
          className="expense-form"
        />
      <CategoryMenu  setExpenseForm={setExpenseForm} expenseForm={expenseForm}/>
      <button type="submit">Add Expense</button>
    </form>
    </div>
  )
}


export default ExpenseForm;