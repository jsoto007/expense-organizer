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
            <button>Expenses</button>
          </NavLink>
          <NavLink
            className="nav-link"
            to="/categories"
            exact
            >
              <button>Categories</button>
            </NavLink>
          <NavLink
            className="nav-link"
            to="/add-expenses"
            exact
            >
              <button>Add Expense</button>
            </NavLink>
      </nav>
    </div>
  )
}

export default Navbar;