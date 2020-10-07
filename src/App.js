import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:project" component={Project} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
