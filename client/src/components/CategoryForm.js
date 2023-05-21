import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContextProvider";


function CategoryForm() {
  const [categoryDataForm, setCategoryDataForm] = useState({
    name: "",
    description: "",
  })

  const {setCategoryData, categoryData} = useContext(DataContext);

  const [errors, setErrors] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/categories`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(categoryDataForm)
    })

    const data = await response.json();
      if (response.ok){
        handleAddCategory(data)
        setCategoryDataForm({
          name: "",
          description: ""
        })
        setErrors([])
      }  else {
        setErrors(data.errors)
      }
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

          {errors.length > 0 && (
          <ul className='error-messages'>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
         )}

      <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}


export default CategoryForm;