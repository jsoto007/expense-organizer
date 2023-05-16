import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function CategoryMenu( {  setExpenseForm, expenseForm } ) {
  const {selectedCategory, setSelectedCategory} = useContext(DataContext);
  // const [selectedCategory, setSelectedCategory] = useState([])

  
  // useEffect(()=> {
  //   fetch('/categories')
  //   .then(resp => {
  //     if (resp.ok) {
  //       resp.json().then(cats => setSelectedCategory(cats))
  //     }
  //   })
  // }, [])

  function handleSelect(e) {
    setExpenseForm({
      ...expenseForm, 
      category_id: e.target.value
    })
  }

  return (
    <div className="category-menu">
      <select name="categories" id="categories" onChange={handleSelect}>
        <option>Please Select A Category</option>
          {selectedCategory.map((cat)=> {
            return (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            )
        })}
      </select>
    </div>
  )
}

export default CategoryMenu;