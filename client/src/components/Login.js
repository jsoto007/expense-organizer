import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";


function Login( { onLogin } ) {

  const { setCurrentUser }  = useContext(UserContext);

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
        resp.json().then(setCurrentUser)
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
  <div className="login-page">
      
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={loginData.username}
        id="username"
        onChange={handleChange}
        placeholder="Username"
        className="auth-field"
      />
      <input
        type="password"
        name="password"
        value={loginData.password}
        id="password"
        onChange={handleChange}
        placeholder="Password"
        className="auth-field"
      />
      <button type="submit">Log In</button>
    </form>
  </div>
)
}


export default Login;