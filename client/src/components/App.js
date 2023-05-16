import React, { useContext } from "react";
import {Route, Switch } from "react-router-dom"
import { UserContext } from "../context/UserContextProvider";
import Navbar from "./Navbar";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";
import Auth from "./Auth"
import Categories from "./Categories";

function App() {

  const {currentUser}  = useContext(UserContext);

  if (!currentUser.id) return <Auth />
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/expenses">
          <Expenses />
        </Route>
        <Route exact path="/add-expenses">
          <ExpenseForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
