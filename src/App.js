import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Hero/>
    </div>
    </Router>
  );
}

export default App;
