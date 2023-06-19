import React, { useState, useContext } from "react";
import { useHistory }  from "react-router-dom"
import { UserContext } from "../context/UserContextProvider";
import { DataContext } from "../context/DataContextProvider";

import CategoryMenu from "./CategoryMenu";

function ExpenseForm() {

  const { currentUser, setCurrentUser} = useContext(UserContext);
  const { categoryData, setCategoryData } = useContext(DataContext);

  const [errors, setErrors] = useState({});

  const [expenseForm, setExpenseForm] = useState({
    amount: "",
    description: "",
    category_id: ""
  });

  let history = useHistory();

   async function handleSubmit(e) {
      e.preventDefault();

      const response = await fetch(`/expenses`, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(expenseForm)
      })
      const data = await response.json();
      if (response.ok){
        handleAddExpense(data)
        history.push('./expenses')
      } else {
        setErrors(data.errors)
      }
    
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

    console.log(errors)
  
   function handleChange(e) {
     const key = e.target.name;
     setExpenseForm({
       ...expenseForm, 
       [key]: e.target.value
     })
   }

  return (
    <div className="expense-div">
   <form onSubmit={handleSubmit}>
   <label className="expense-label" for="description1">Description  </label>
   <input
     type="text"
     name="description"
     value={expenseForm.description}
     id="description1"
     onChange={handleChange}
     placeholder="Please enter description"
     className="expense-form"
   />
   <br></br>
   <label className="expense-label-2"for="amount1">Amount  </label>
        <input
          type="integer"
          name="amount"
          value={expenseForm.amount}
          id="amount1"
          onChange={handleChange}
          placeholder="Please enter amount"
          className="expense-form"
        />
      <CategoryMenu  setExpenseForm={setExpenseForm} expenseForm={expenseForm}/>

      {errors.length > 0 && (
        <ul className='error-messages'>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <button type="submit">Add Expense</button>
    </form>
    </div>
  )
}


export default ExpenseForm;