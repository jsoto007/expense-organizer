import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import appLogo from "../appLogo.png"

function Auth( { onLogin } ) {


  return (
    <div className="landing-page">
      <img
        id="app-logo"
        src={appLogo}
        alt="Expense Tacker"
      ></img>
      <div className="landing-page" id="login-signup">
        <Login onLogin={onLogin} />
        <Signup onLogin={onLogin} />
      </div>
    </div>
  )
}

export default Auth;