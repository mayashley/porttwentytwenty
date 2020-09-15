import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hero from "./components/Hero";


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Hero/>
    </div>
    </Router>
  );
}

export default App;
