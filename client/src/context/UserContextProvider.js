import React, { useState, useEffect} from "react"

const UserContext = React.createContext();


function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

  const [userErrors, setUserErrors] = useState([])

  useEffect(() => {
    fetch('/login')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => setCurrentUser(user))
      } else {
        resp.json().then((errorData) => setUserErrors(errorData.error))
      }
    })
  }, [])

  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> setCurrentUser({
      expenses: []
    }))
  }

return (
  <UserContext.Provider value={{
    currentUser, 
    setCurrentUser, 
    handleLogout,
    userErrors
  }}>
      { children }
  </UserContext.Provider>
)

}

export { UserContext, UserContextProvider};


