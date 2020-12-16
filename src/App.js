import React, { useEffect, useState } from "react";
import "./App.css";
// import { Helmet } from "react-helmet";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
  let location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [location.pathname]);

  return (
    // <Router>
    <div className="App">
      <ResponsiveNavbar notFound={isNotFound} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:project" component={Project} />
      </Switch>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
