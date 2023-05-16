import React, { useState, useEffect } from 'react';

const ExpenseContext = React.createContext();

function DataContextProvider ( { children } ) {
  const [expenseData, setExpenseData] = useState({
    expense: []
  })

  useEffect(()=> {
    fetch('/expenses')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((expenses) => setExpenseData(expenses))
      }
    })
  }, [])
   
  return (
    <ExpenseContext.Provider value={{expenseData, setExpenseData}}>
      {children}
    </ExpenseContext.Provider>
  )

}

export {ExpenseContext, DataContextProvider}
