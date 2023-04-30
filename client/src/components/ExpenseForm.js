import React, { useState } from "react";

function ExpenseForm() {
  const [expenseData, setExpenseData] = useState({
    amount: 123, 
    description: "This is it for now",
  
  })

    function handleSubmit(e) {
      e.preventDefault();
      fetch(`/categories`, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(expenseData)
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


export default ExpenseForm;