import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";


function Navbar( { onLogout } ) {

const {currentUser, handleLogout}  = useContext(UserContext);

  return (
    <div className="nav-div">
      Current User: {currentUser.username}
      <button id="logout-btn" onClick={handleLogout}>Logout</button>
      <nav id="nav-bar">
        <NavLink
          className="nav-link"
          to="/expenses"
          exact
          >
            Expenses
          </NavLink>
          <NavLink
            className="nav-link"
            to="/"
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