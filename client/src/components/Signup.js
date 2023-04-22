import React, { useState } from 'react';


function Signup() {
  const [signupData, setSignupData] = useState({
    username: "",
    password: ""
  })



  function handleChange(e) {
    const key = e.tartget.id
    setSignupData({
      ...signupData, 
      [key]: e.tartget.value
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