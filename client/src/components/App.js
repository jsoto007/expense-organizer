import React, { useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login"
import Navbar from "./Navbar";

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

  if(!currentUser) return <Login setCurrentUser={setCurrentUser} />

  return (
    <div className="App">
     The current user is:  {currentUser.username}
     <Navbar onLogout={setCurrentUser} />

     <Switch>
      <Route exact path="/">
        Hello, Welcome!
      </Route>
      <Route exact path="/signup/users">
        <Login onLogin={setCurrentUser} />
        <Signup onLogin={setCurrentUser} />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
