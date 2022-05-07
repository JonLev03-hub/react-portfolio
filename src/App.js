
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Work from './components/work';
import Home from './components/home';

export default function App() {
  return (
  <div className = "app" > 
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/skills" element = {<Skills />} />
        <Route path = "/work" element = {<Work />} />
      </Routes>
    </Router>
  </div>
)}
