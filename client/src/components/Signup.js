import React, { useState } from 'react';


function Signup() {

  const [currentUser, setCurrentUser] = useState()
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
        resp.json().then(setCurrentUser)
      }
    })
  }


  function handleChange(e) {
    const key = e.target.id
    setSignupData({
      ...signupData, 
      [key]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={signupData.username}
          id="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={signupData.password}
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default Signup;