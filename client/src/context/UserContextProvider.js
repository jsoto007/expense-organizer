import React, { useState, useEffect} from "react"

const UserContext = React.createContext();

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => {
          setCurrentUser(user)
          window.localStorage.setItem("isLoggedIn", true)
        })
      }
    })
  }, [])


  function handleReload() {
    setTimeout(function(){
      window.location.reload();
  }, 100);
  }



  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> {
      setCurrentUser({
      expenses: []
    })
    localStorage.removeItem("isLoggedIn")
    handleReload()
  })
  }

return (
  <UserContext.Provider value={{
    currentUser, 
    setCurrentUser, 
    handleLogout,
    // userUpdated
  }}>
      { children }
  </UserContext.Provider>
)

}

export { UserContext, UserContextProvider};


