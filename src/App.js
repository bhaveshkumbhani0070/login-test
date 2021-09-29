import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./componenets/Login";
import Home from "./componenets/Home";

function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route path="/logout"></Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
