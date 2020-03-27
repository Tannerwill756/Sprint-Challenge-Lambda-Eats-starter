import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import {Link} from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1> <Link to="/">Home</Link>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
