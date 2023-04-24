import React from "react";

function Navbar( { onLogout } ) {


  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> onLogout())
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar;