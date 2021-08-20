import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header id="header">
            <nav className="header__menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">projects</Link></li>
                    <li><Link to="/youtube">youtube</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;