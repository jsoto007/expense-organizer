import React from "react";


function UsersCard( { uniqUsers } ) {

  return (
    <div>
        {uniqUsers.map((user) => {
          return (
            <ul key={user.id}>
              <li>{user.username}</li>
            </ul>
          )
        })}
    </div>
  )
}

export default UsersCard;