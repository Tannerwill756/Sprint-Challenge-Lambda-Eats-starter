import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import {Link} from "react-router-dom";

const App = () => {
  return (
      <div>
        <nav>
          <h1>Lambda Eats</h1> 
          <Link to="/">Home</Link> <Link to="/pizza">Order Here</Link>
        </nav>
        <Switch>
          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    
  );
};
export default App;
