import React, { useState, useEffect } from "react";


function Home( { currentUser } ) {

  const [userData, setUserData] = useState("")

  useEffect(()=> {
    fetch('/expenses')
    .then(resp => resp.json())
    .then(data => setUserData(data))
  }, [currentUser])

  console.log(userData)
  return (
    <div>
      {userData.map((expense) => {
        return (
          <div>
            <li key={expense.id}>
              {expense.description}
            </li>
          </div>
        )
      })}
    </div>
  )
}


export default Home;