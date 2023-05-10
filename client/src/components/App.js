import React, { useContext } from "react";
import {Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Expenses from "./Expenses";
import CategoryForm from "./CategoryForm";
import ExpenseForm from "./ExpenseForm";
import Auth from "./Auth"
import { UserContext } from "../context/UserContextProvider";


function App() {

  const {currentUser}  = useContext(UserContext);

  if (!currentUser.id) return <Auth />
  
  return (
    <div className="App">
      <CategoryForm />
      <Navbar />
      <Switch>
        <Route exact path="/">
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
