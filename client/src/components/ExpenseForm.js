import React, { useState, useContext } from "react";
import { useHistory }  from "react-router-dom"
import { UserContext } from "../context/UserContextProvider";
import { DataContext } from "../context/DataContextProvider";

import CategoryMenu from "./CategoryMenu";

function ExpenseForm() {

  const { currentUser, setCurrentUser} = useContext(UserContext);
  const { categoryData, setCategoryData } = useContext(DataContext)

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
      setCurrentUser({
        ...currentUser,
         expenses: [newExpense, ...currentUser.expenses]
      })
      handleAddUserToCategory(newExpense)
    }
    
    function handleAddUserToCategory(newExpense) {
      const updatedCategories = categoryData.map((category) => {

        if (category.id === newExpense.category_id) {
          
          const filteredUsers = category.uniq_users.filter((uniUser) => uniUser.id !== newExpense.user.id)
          
          return {
            ...category,
            uniq_users: [newExpense.user, ...filteredUsers]
          }
        } else {
          return category
        }

      })
      setCategoryData(updatedCategories)
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
   <label for="description1">Description  </label>
   <input
     type="text"
     name="description"
     value={expenseForm.description}
     id="description1"
     onChange={handleChange}
     placeholder="description"
     className="expense-form"
   />
   <br></br>
   <label for="amount1">Amount  </label>
        <input
          type="integer"
          name="amount"
          value={expenseForm.amount}
          id="amount1"
          onChange={handleChange}
          placeholder="amount"
          className="expense-form"
        />
      <CategoryMenu  setExpenseForm={setExpenseForm} expenseForm={expenseForm}/>
      <button type="submit">Add Expense</button>
    </form>
    </div>
  )
}


export default ExpenseForm;