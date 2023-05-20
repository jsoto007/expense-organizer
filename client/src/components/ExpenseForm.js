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
    
    // find the category which was updated ✅
    // check if the user exist in that category ✅
    // if so return the category
    // if not add the new user
    function handleAddUserToCategory(newExpense) {
      const foundCategory =  categoryData.find((category) => category.id === newExpense.category_id)

      const foundUser = foundCategory.uniq_users.find((uniqUser) => uniqUser.id === newExpense.user.id)
      
      if (!foundUser) return (
        setCategoryData({
          ...categoryData,
          uniq_users: [foundUser, ...foundCategory.uniq_users]
        })
      )
      console.log("foundCategory: ",foundCategory.uniq_users)
      console.log("FOUND USER : ",foundUser)

    }
    
    
    /*
    function handleAddTask(newTask) {
      const updatedCategories = categories.map((cat)=> {
        if (cat.id === newTask.categorization_id) {
          return {
            ...cat, 
            tasks: [newTask, ...cat.tasks]
          }
        } else {
          return cat
        }
      })
      setCategories(updatedCategories);
    }
    
    */

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