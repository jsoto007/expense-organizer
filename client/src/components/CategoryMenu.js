import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function CategoryMenu( {  setExpenseForm, expenseForm } ) {

  const {categoryData} = useContext(DataContext);


  function handleSelect(e) {
    setExpenseForm({
      ...expenseForm, 
      category_id: e.target.value
    })
  }

  return (
    <div>
      <label className="expense-label" for="categories" > Categories </label>
      <select name="categories" className="category-menu" id="categories" onChange={handleSelect}>
          {categoryData.map((cat)=> {
            return (
              <option className="dropdown-menu" key={cat.id} value={cat.id}>{cat.name}</option>
            )
        })}
      </select>
    </div>
  )
}

export default CategoryMenu;