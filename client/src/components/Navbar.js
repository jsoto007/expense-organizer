import React from "react";
import { NavLink } from "react-router-dom";

function Navbar( { onLogout } ) {


  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> onLogout())
  }

  return (
    <div >
      <nav id="nav-bar">
        <NavLink
          className="nav-link"
          to="/"
          exact
          >
            Home
          </NavLink>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar;