import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import About from "./pages/about";
import Skills from "./pages/skills";
import Work from "./pages/work";
import Home from "./pages/home";
import ContactPopup from "./components/contactPopup";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <ContactPopup />
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
