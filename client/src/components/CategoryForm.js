import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContextProvider";


function CategoryForm() {
  const [categoryDataForm, setCategoryDataForm] = useState({
    name: "",
    description: "",
  })

  const {setCategoryData, categoryData} = useContext(DataContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/categories`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(categoryDataForm)
    })
    .then(resp => {
      if (resp.ok){
        resp.json().then(newCategory => handleAddCategory(newCategory))
      }
    })

    setCategoryDataForm({
      name: "",
      description: ""
    })
  }

  function handleAddCategory(newCategory) {
    setCategoryData([...categoryData, newCategory])
  }


  function handleChange(e) {
    const key = e.target.id
    setCategoryDataForm({
      ...categoryDataForm,
      [key]: e.target.value
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={categoryDataForm.name}
            id="name"
            onChange={handleChange}
            placeholder="name"
            className="category-form"
          />
           <input
            type="text"
            name="description"
            value={categoryDataForm.description}
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