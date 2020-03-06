import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./contents/Home";
import About from "./contents/About";
import Team from "./contents/Team";
import Match from "./contents/Match";
import Contact from "./contents/Contact";
function App() {
  return (
    <div>
    <div className="header"></div>
    <Router>
     
      <div className="App">
        
        <Navbar />
        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route for About.js contents */}
        <Route path="/about">
          <About />
        </Route>
        {/* Route for Team.js contents */}
        <Route path="/Team">
          <Team />
        </Route>
        {/* Route for Match.js contents */}
        <Route path="/Match">
          <Match />
        </Route>
        {/* Route for Contact.js contents */}
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
    </div>
   
  );
}
export default App;
