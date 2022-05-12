import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function Header({ contactFunction }) {
  const links = [
    {
      name: "this.about()",
      path: "/react-portfolio/about",
    },
    {
      name: "this.skills()",
      path: "/react-portfolio/skills",
    },
    {
      name: "this.work",

      path: "/react-portfolio/work",
    },
  ];
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/react-portfolio/">Jonathan Leverenz</Link>
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <li>
          <button className={styles.contact} onClick={contactFunction}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
