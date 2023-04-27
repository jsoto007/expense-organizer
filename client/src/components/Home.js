import React, { useState, useEffect } from "react";


function Home( { currentUser } ) {

  const [userData, setUserData] = useState("")

  useEffect(()=> {
    fetch('/expenses')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [currentUser])

  return (
    <div>
      This is the home component
    </div>
  )
}


export default Home;