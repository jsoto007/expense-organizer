import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import appLogo from "../appLogo.png"


function Auth( { onLogin } ) {

  const [toggleBtn, setToggleBtn] = useState([])

  function handleToggleEdit() {
    setToggleBtn((toggleBtn) => !toggleBtn)
  }

  return (
    <div className="landing-page">
      <img
        id="app-logo"
        src={appLogo}
        alt="Expense Tacker"
      />
      <div className="landing-page" id="login-signup">
        <Login onLogin={onLogin} />
        <hr id="login-line"/>
        {toggleBtn ? (<button className="create-acc-btn" onClick={handleToggleEdit}> Create an Account </button>) : (<Signup onLogin={onLogin} />)}
                
      </div>
    </div>
  )
}

export default Auth;