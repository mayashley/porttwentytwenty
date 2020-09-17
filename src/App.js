import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from "./components/Technologies";
import Contact from './components/Contact';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
     <Hero/>
     <Projects/>
     <Contact/>
     <Technologies/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
