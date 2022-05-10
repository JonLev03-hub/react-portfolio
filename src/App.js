import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./components/header";
import About from "./pages/about";
import Skills from "./pages/skills";
import Work from "./pages/work";
import Home from "./pages/home";
import ContactPopup from "./components/contactPopup";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("triggered");
  };
  return (
    <div className="app">
      <Router>
        <Header contactFunction={togglePopup} />
        <ContactPopup show={showPopup} contactFunction={togglePopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}
