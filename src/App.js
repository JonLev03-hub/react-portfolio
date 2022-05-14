import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  const transition = {
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app">
      <Router>
        <AnimatePresence>
          <Header contactFunction={togglePopup} />
          <Routes>
            <Route path="/" element={<Home transition={transition} />} />
            <Route path="/about" element={<About transition={transition} />} />
            <Route
              path="/skills"
              element={<Skills transition={transition} />}
            />
            <Route path="/work" element={<Work transition={transition} />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}
