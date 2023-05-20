import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();

function DataContextProvider ( { children } ) {
  const [expenseData, setExpenseData] = useState({
    expense: []
  })

  const [categoryData, setCategoryData] = useState({
    category: []
  })

  useEffect(()=> {
    fetch('/expenses')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((expenses) => setExpenseData(expenses))
      }
    })
  }, [])

  useEffect(()=> {
    fetch('/categories')
    .then(resp => {
      if (resp.ok) {
        resp.json().then(cats => setCategoryData(cats))
      }
    })
  }, [])
   
  return (
    <DataContext.Provider value={{
      expenseData, 
      setExpenseData,
      categoryData,
      setCategoryData
    }}>
      {children}
    </DataContext.Provider>
  )

}

export {DataContext, DataContextProvider}
