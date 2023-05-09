import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../context/UserContextProvider";


function Navbar( { onLogout } ) {

// const currentUser  = useContext(UserContext)

// console.log("from NAV", currentUser)

  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> onLogout())
  }

  return (
    <div className="nav-div">
      <button id="logout-btn" onClick={handleLogout}>Logout</button>
      <nav id="nav-bar">
        <NavLink
          className="nav-link"
          to="/"
          exact
          >
            Expenses
          </NavLink>
          <NavLink
            className="nav-link"
            to="/expenses"
            exact
            >
              Categories
            </NavLink>
          <NavLink
            className="nav-link"
            to="/add-expenses"
            exact
            >
              Add Expense
            </NavLink>
      </nav>
    </div>
  )
}

export default Navbar;