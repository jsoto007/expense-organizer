import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth( { onLogin } ) {


  return (
    <div className="landing-page">
      <img 
        src="https://lh4.googleusercontent.com/8FvZiF1XfVafZSPWT7fiNaoOVKRAUkDBZiy849WVSOxoDO0t4TwoVOqEO4mV4TK8AdrvFIho6Jn4gWerghlXyHPXOyCei4CyurxgkFPn0i9TZBUhg3_Pq_QOaJhFxrUL4w=w1280"
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