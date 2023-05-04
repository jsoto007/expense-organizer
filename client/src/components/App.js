import React, { useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Auth from "./Auth";
import Expenses from "./Expenses";
import CategoryForm from "./CategoryForm";

import ExpenseForm from "./ExpenseForm";

function App() {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  console.log("Current User", currentUser)

  if(!currentUser) return <Auth onLogin={setCurrentUser} />



  return (
    <div className="App">
     The current user is:  {currentUser.username}
     <CategoryForm />
     <Navbar onLogout={setCurrentUser} />
     <Switch>
      <Route exact path="/">
        <Expenses currentUser={currentUser} />
      </Route>
      <Route exact path="/add-expenses">
        <ExpenseForm />
      </Route>
      
     </Switch>
    </div>
  );
}

export default App;
