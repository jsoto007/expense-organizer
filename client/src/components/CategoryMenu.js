import React, { useState } from "react";

function CategoryMenu() {

  const [selectedCategory, setSelectedCategory] = useState([])


  function handleSelect(e) {
    console.log(e.target.value)
  }

  return (
    <div className="category-menu">
          <select name="categories" id="categories" onChange={handleSelect}>
          <option value="23">Transportation</option>
          <option value="22">Food</option>
          <option value="65">Other</option>
          </select>
    </div>
  )
}

export default CategoryMenu;