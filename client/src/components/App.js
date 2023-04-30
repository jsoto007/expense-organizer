import React, { useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Auth from "./Auth";
import Home from "./Home";
import Expenses from "./Expenses";
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

  if(!currentUser) return <Auth onLogin={setCurrentUser} />



  return (
    <div className="App">
     The current user is:  {currentUser.username}
     <ExpenseForm />
     <Navbar onLogout={setCurrentUser} />
     <Switch>
      <Route exact path="/">
        This is home !!!
        {/* <Home currentUser={currentUser} /> */}
        <Expenses currentUser={currentUser} />
      </Route>
      <Route exact path="/user_id/home">
      </Route>
      
     </Switch>
    </div>
  );
}

export default App;
