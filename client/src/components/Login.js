import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";


function Login() {

  const { setCurrentUser }  = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    username: "", 
    password: ""
  })

  const [errors, setErrors] = useState([])

 async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(loginData)
    });
    const data = await response.json();
      if(response.ok){
        setCurrentUser(data)
      } else {
        setErrors(data.error)
      }
  }

  function handleChange(e) {
    const key = e.target.id
    setLoginData({
      ...loginData, 
      [key]: e.target.value
    })
  }
  console.log("errors", errors)

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

      {errors? (
        <ul className='error-messages' key={errors.login}>
          <li>{errors.login}</li>
        </ul>
      ): 
      null}
      
      {/* {errors.length > 0 && (
          <ul className='error-messages'>
            {errors.map((error) => (
              console.log("inside the map",error)
              // <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
      <button type="submit">Log In</button>
    </form>
  </div>
)
}


export default Login;