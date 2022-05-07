import {Link} from 'react-router-dom';
import HeaderCss from './header.module.css';
export default function Header () {
    const links = [
        {
            name: 'this.about()',
            path: '/about'
        },
        {
            name: 'this.skills()',
            path: '/skills'
        },
        {
            name: 'this.work',

            path: '/work'
        }
    ];
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
                <li><button className = {HeaderCss.contact}>Contact</button></li>
            </ul>

        </nav>
    )
}
