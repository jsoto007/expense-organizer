import React, { useState, useEffect } from "react";


function Expenses() {

  const [userExpense, setUserExpense] = useState("")

  useEffect(()=> {
    fetch('/expenses')
    .then(resp => resp.json())
    .then(setUserExpense, console.log("inside useEffect"))
  }, [])

  console.log(userExpense)
  return (
    <div>
      {console.log("execute")}
      {userExpense.map((expense) => {
        return (
          <li>{expense.description}</li>
        )
      })}
    </div>
  )
}

export default Expenses;