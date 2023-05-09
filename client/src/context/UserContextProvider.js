import React, { createContext, useContext, useState } from "react"

const UserContext = createContext({
  currentUser: {}, 
  setCurrentUser: () => {}
});

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

return (
  <UserContext.provider value={{currentUser, setCurrentUser}}>
      { children }
  </UserContext.provider>
)

}

export default UserContextProvider() 

export const useUserContext = () => {
  
  return userContext(UserContext)

}



