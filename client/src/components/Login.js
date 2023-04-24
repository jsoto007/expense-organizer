import React, { useState } from "react";



function Login( { onLogin } ) {

  const [loginData, setLoginData] = useState({
    username: "", 
    password: ""
  })
  function handleSubmit(e) {
    e.preventDefault();
  fetch(`/login`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(loginData)
  })
  .then(resp => {
    if(resp.ok){
      resp.json().then(onLogin)
    }
  })
}


function handleChange(e) {
  const key = e.target.id
  setLoginData({
    ...loginData, 
    [key]: e.target.value
  })
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={loginData.username}
        id="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={loginData.password}
        id="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  </div>
)
}


export default Login;