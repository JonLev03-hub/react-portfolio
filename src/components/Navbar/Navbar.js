import React, { useState, useEffect } from "react";
import { a } from "react-router-dom";
import Styles from "./Navbar.module.css";
import icon from "./Hamberger.png";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={Styles.nav}>
      <a href="#home">
        <h1 className={Styles.title}>Jonathan Leverenz</h1>
      </a>
      {(toggleMenu || screenWidth > 700) && (
        <>
          <div onClick={toggleNav} className={Styles.backdrop}>
            {" "}
          </div>
          <ul className={Styles.list}>
            <li className={Styles.items}>
              <a href="#about" className={Styles.items}>
                this.About
              </a>
            </li>
            <li className={Styles.items}>
              <a href="#skills" className={Styles.items}>
                this.Skills
              </a>
            </li>
            <li className={Styles.items}>
              <a href="#work" className={Styles.items}>
                this.Work
              </a>
            </li>
            <li>
              <a
                className={Styles.contact}
                href="mailto:JonathanMLeverenz@hotmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </>
      )}
      <button onClick={toggleNav} className={Styles.hambergerBtn}>
        <img className={Styles.img} src={icon} alt="Menu" />
      </button>
    </nav>
  );
}
