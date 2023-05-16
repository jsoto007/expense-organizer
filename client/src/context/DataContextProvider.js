import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();

function DataContextProvider ( { children } ) {
  const [expenseData, setExpenseData] = useState({
    expense: []
  })

  const [selectedCategory, setSelectedCategory] = useState([])

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
        resp.json().then(cats => setSelectedCategory(cats))
      }
    })
  }, [])
   
  return (
    <DataContext.Provider value={{
      expenseData, 
      setExpenseData,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </DataContext.Provider>
  )

}

export {DataContext, DataContextProvider}
