import Styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
export default function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <main className={Styles.main}>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </AnimatePresence>
        </main>
      </Router>
    </div>
  );
}
