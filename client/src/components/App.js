import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login"

function App() {

  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
    This is the App
    <Login onLogin={setCurrentUser} />
    <Signup onLogin={setCurrentUser} />
    </div>
  );
}

export default App;
