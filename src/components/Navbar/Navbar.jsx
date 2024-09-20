import React from 'react';
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav"
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu= () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200"/>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img src="./assets/images/Logo.png" alt="" className="logo" />

            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item">Skills</a>
                </li>
                <li>
                    <a className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>
                
                <button className="contact-btn"
                onClick={() => {}}>Hire Me
                </button>
            </ul>

            <button class="menu-btn" onClick={toggleMenu}>
                <span
                class={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem "}}
                >
                    {openMenu ? "close" : "menu"}
                </span>
            </button>    
            </div>
        </nav>
        </>
    );
};

export default Navbar;