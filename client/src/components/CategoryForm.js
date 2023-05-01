import React, { useState } from "react";

function CategoryForm() {
  const [categoryData, setCategoryData] = useState({
    name: "AirPlaanes dfd",
    description: "This is it for now",
  
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

  return (
    <div>
<button onClick={handleSubmit}>submit</button>
    </div>
  )
}


export default CategoryForm;