import Styles from "./App.module.css";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";
import SideLinks from "./components/SideLinks/SideLinks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
export default function App() {
  return (
    <div className={Styles.app}>
      <NavBar />
      <SideLinks />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
