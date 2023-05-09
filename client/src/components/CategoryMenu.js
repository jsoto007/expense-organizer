import React from "react";

function CategoryMenu() {

  return (
    <div className="category-menu">
          <select name="categories" id="categories">
          <option value="23">Transportation</option>
          <option value="22">Food</option>
          <option value="65">Other</option>
          </select>
    </div>
  )
}

export default CategoryMenu;