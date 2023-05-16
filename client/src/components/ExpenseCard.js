import React, { useState} from "react";
import DeleteExpense from "./DeleteExpense";
import EditExpense from "./EditExpense";


function ExpenseCard( { expense } ) {
  
  const [toggleEdit, setToggleEdit] = useState(true)

  function handleToggleEdit() {
      setToggleEdit((toggleEdit) => !toggleEdit)
  }

  return (
    <div>
      {toggleEdit ? (
        <div className="expense-div">
        <h3>{expense.summary}</h3>
        <ul className="expenses-li">
          <li><b>Description | </b>{expense.description}</li>
          <li><b>Amount | </b>{expense.amount}</li>
          <li id="category-li"><b>Category | </b>{expense.category_name}</li>
        </ul>
        <div className="delete-and-edit">
          <DeleteExpense expense={expense} />
          <button onClick={handleToggleEdit}>✏️</button>
        </div>
        </div>
      ) : (
        <>
        <EditExpense expense={expense} setToggleEdit={setToggleEdit} toggleEdit={toggleEdit}/>
        </>
      ) }
    </div>
  )
}


export default ExpenseCard;