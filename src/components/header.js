import {Link} from 'react-router-dom';
export default function Header () {
    const links = [
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Skills',
            path: '/skills'
        },
        {
            name: 'Work',

            path: '/work'
        }
    ];
    return (
        <header className = "Nav">
            <a href = "about">test</a>
        </header>
    )
}
