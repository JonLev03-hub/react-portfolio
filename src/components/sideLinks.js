import SideLinksCss from './sideLinks.module.css';
export default function SideLinks() {
    const links = [
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/JonathanMLeverenz",
            image: "../assets/linkedin-icon.png"
        },
        {
            name: "github",
            url: "https://www.github.com/jonlev03-hub",
            image: "../assets/github-icon.png"
        },
    ]
    return (
        <div className="side-links">
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.image} alt={link.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

