import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { UserContext } from "../context/UserContextProvider";

function CategoryMenu( {  setExpenseForm, expenseForm } ) {

  const {categoryData} = useContext(DataContext);
  const { currentUser } = useContext(UserContext)

  function handleSelect(e) {
    setExpenseForm({
      ...expenseForm, 
      category_id: e.target.value
    })
  }

  return (
    <div className="category-menu">
      Category
      <select name="categories" id="categories" onChange={handleSelect}>
          {categoryData.map((cat)=> {
            return (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            )
        })}
      </select>
    </div>
  )
}

export default CategoryMenu;