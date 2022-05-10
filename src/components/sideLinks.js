import styles from "./sideLinks.module.css";
export default function SideLinks() {
  const links = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/JonathanMLeverenz",
      src: "./assets/linkedin-icon.png",
    },
    {
      name: "github",
      url: "https://www.github.com/jonlev03-hub",
      src: "./assets/github-icon.png",
    },
  ];
  return (
    <ul className={styles.ul}>
      {links.map((link) => (
        <a href={link.url} target="about:blank" rel="noopener">
          <li key={link.name} className={styles.li}>
            <img className={styles.img} src={link.src} alt={link.name} />
          </li>
        </a>
      ))}
    </ul>
  );
}
