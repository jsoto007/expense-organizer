import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth( { onLogin } ) {


  return (
    <div className="landing-page">
      <img
        id="company-logo"
        src="https://lh6.googleusercontent.com/1IDWLxfxztFCdvuErTDv3MJUygQEod9jYQipnaIvSzW0GW1Ezp7w4TBGZAsjLtjb-r2Hun8f7N4G1x48FEJW4orXwOzynCBKs0MH-c5YKIHBhoISqwlMagDEv_TwvosDSQ=w1280"
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