import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function Header({ contactFunction }) {
  const links = [
    {
      name: "this.about()",
      path: "/about",
    },
    {
      name: "this.skills()",
      path: "/skills",
    },
    {
      name: "this.work",

      path: "/work",
    },
  ];
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/">Jonathan Leverenz</Link>
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        <li>
          <a
            className={styles.contact}
            href="mailto:JonathanMLeverenz@hotmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
