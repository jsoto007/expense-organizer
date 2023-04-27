import React, { useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login"
import Navbar from "./Navbar";
import Auth from "./Auth";

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
     <Navbar onLogout={setCurrentUser} />
     <Switch>
      <Route exact path="/">
        This is home !!!
      </Route>
      
     </Switch>
    </div>
  );
}

export default App;
