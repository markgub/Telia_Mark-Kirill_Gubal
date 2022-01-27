import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  document.body.style = 'background: #F2F2F2;';
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;