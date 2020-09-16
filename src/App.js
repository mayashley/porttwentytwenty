import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Projects from './components/Projects';



import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Hero/>
     <Projects/>
    </div>
    </Router>
  );
}

export default App;
