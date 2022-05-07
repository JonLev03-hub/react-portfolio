import {NavLink} from "react-router-dom";
import React from "react";

export default function Header() {
    const links = [
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Skills",
            path: "/skills"
        },
        {
            name: "Work",
            path: "/work"
        }
    ];

    return (
        <header>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )}
