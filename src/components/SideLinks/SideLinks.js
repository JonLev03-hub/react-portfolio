import Styles from "./SideLinks.module.css";
export default function SideLinks() {
  return (
    <div className={Styles.container}>
      <a href="https://www.github.com/jonlev03-hub" target="_blank">
        <img src="./assets/github-icon.png"></img>
      </a>
      <a href="https://www.linkedin.com/in/jonathanmleverenz" target="_blank">
        <img src="./assets/linkedin-icon.png"></img>
      </a>
    </div>
  );
}
