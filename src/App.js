import Styles from "./App.module.css";
import React from "react";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";
import SideLinks from "./components/SideLinks/SideLinks";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <SideLinks />
      <main className={Styles.main}>
        <section className={Styles.section} id="home">
          <Home />
        </section>
        <section className={Styles.section} id="about">
          <About />
        </section>
        <section className={Styles.section} id="skills">
          <Skills />
        </section>
        <section className={Styles.section} id="work">
          <Work />
        </section>
      </main>
    </div>
  );
}
