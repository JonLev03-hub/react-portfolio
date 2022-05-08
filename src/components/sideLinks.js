import styles from './sideLinks.module.css';
export default function SideLinks() {
    const links = [
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/JonathanMLeverenz",
            src: require("../assets/linkedin-icon.png")
        },
        {
            name: "github",
            url: "https://www.github.com/jonlev03-hub",
            src: require("../assets/github-icon.png")
        },
    ]
    return (
            <ul className = {styles.ul}>
                {links.map(link => 
                    <li key = {link.name} className = {styles.li}>
                        <a>
                            <img className = {styles.img} src={link.src} alt={link.name}/>
                        </a>
                    </li>
                )}
            </ul>
    );
}

