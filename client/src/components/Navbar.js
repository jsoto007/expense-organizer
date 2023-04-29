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
        <button id="logout-btn" onClick={handleLogout}>Logout</button>
      <nav id="nav-bar">
        <NavLink
          className="nav-link"
          to="/"
          exact
          >
            Home
          </NavLink>
      </nav>
    </div>
  )
}

export default Navbar;