import React, { useContext, useState, useEffect } from "react";
import {Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Auth from "./Auth";
import Expenses from "./Expenses";
import CategoryForm from "./CategoryForm";
import { UserContextProvider, UserContext } from "../context/UserContextProvider";

import ExpenseForm from "./ExpenseForm";


function App() {

  return (
    <div className="App">
      <UserContextProvider>
      <CategoryForm />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Expenses />
        </Route>
        <Route exact path="/add-expenses">
          <ExpenseForm />
        </Route>
      </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
