import React, { useState } from "react";

function CategoryForm() {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",

  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/categories`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(categoryData)
    })
    .then(resp => {
      if (resp.ok){
        resp.json().then(data => console.log(data))
      }
    })
  }

  function handleChange(e) {
    const key = e.target.id
    setCategoryData({
      ...categoryData,
      [key]: e.target.value
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={categoryData.name}
            id="name"
            onChange={handleChange}
            placeholder="name"
            className="category-form"
          />
           <input
            type="text"
            name="description"
            value={categoryData.description}
            id="description"
            onChange={handleChange}
            placeholder="description"
            className="category-form"
          />

      <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}


export default CategoryForm;