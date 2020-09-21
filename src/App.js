import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import ProjectScreen from "./components/ProjectScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/project/:pathName">
            <ProjectScreen />
          </Route>
          
          <Route path="/">
            <Hero />
            <Projects />
            <Contact />
            <Technologies />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
