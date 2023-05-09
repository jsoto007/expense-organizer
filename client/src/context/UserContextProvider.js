import React, { useState, useEffect } from "react"

const UserContext = React.createContext();

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

  // useEffect(() => {
  //   fetch('/users')
  //   .then(resp => {
  //     if (resp.ok){
  //       resp.json().then(user => setCurrentUser(user))
  //     }
  //   })
  // }, [])

return (
  <UserContext.Provider value={{currentUser, setCurrentUser}}>
      { children }
  </UserContext.Provider>
)

}

export { UserContext, UserContextProvider};


