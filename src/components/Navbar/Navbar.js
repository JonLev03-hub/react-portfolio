import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <h1 className={Styles.title}>Jonathan Leverenz</h1>
      </Link>
      {(toggleMenu || screenWidth > 700) && (
        <ul className={Styles.list}>
          <li className={Styles.items}>
            <Link to="/about" className={Styles.items}>
              this.About
            </Link>
          </li>
          <li className={Styles.items}>
            <Link to="/skills" className={Styles.items}>
              this.Skills
            </Link>
          </li>
          <li className={Styles.items}>
            <Link to="/work" className={Styles.items}>
              this.Work
            </Link>
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
      )}
      <button onClick={toggleNav} className={Styles.hambergerBtn}>
        <img className={Styles.img} src={icon} alt="Menu" />
      </button>
    </nav>
  );
}
