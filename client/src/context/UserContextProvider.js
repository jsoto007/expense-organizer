import React, { createContext, useContext, useState } from "react"

const UserContext = createContext({
  currentUser: {}, 
  setCurrentUser: () => {}
});

export default function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

return (
  <UserContext.provider value={{currentUser, setCurrentUser}}>
      { children }
  </UserContext.provider>
)

}


export const useUserContext = () => {
  
  return useContext(UserContext)

}



