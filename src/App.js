import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Switch>
      <Route exact path="/" component={Home} />
      </Switch> */}
      </div>
    </Router>
  );
}

export default App;
