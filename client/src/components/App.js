import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login"

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
    This is the App
    <Login onLogin={setCurrentUser} />
    <Signup onLogin={setCurrentUser} />
    </div>
  );
}

export default App;
