import React, { useState, useEffect } from "react"

const UserContext = React.createContext();

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

return (
  <UserContext.provider value={{currentUser, setCurrentUser}}>
      { children }
  </UserContext.provider>
)

}

export { UserContext, UserContextProvider };


