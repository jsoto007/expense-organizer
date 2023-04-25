import React, { useState } from 'react';


function Signup( { onLogin } ) {

  
  const [signupData, setSignupData] = useState({
    username: "",
    password: ""
  })

  function handleSubmit(e) {
      e.preventDefault();
    fetch(`/users`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(signupData)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(onLogin)
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
      <form onSubmit={handleSubmit}>
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