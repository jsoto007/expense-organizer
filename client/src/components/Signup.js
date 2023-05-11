import React, { useState, useContext } from 'react';
import { UserContext } from "../context/UserContextProvider";

function Signup() {

  const { setCurrentUser } = useContext(UserContext)
  
  const [signupData, setSignupData] = useState({
    username: "",
    password: ""
  })

  function handleSignup(e) {
      e.preventDefault();
    fetch(`/users`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(signupData)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(setCurrentUser)
      }
    })
  }


  function handleChange(e) {
    const key = e.target.name
    setSignupData({
      ...signupData, 
      [key]: e.target.value
    })
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          value={signupData.username}
          id="username1"
          onChange={handleChange}
          placeholder="Username"
          className="auth-field"
        />
        <input
          type="password"
          name="password"
          value={signupData.password}
          id="password1"
          onChange={handleChange}
          placeholder="Password"
          className="auth-field"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default Signup;