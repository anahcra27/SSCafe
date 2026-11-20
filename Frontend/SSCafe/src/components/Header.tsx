
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">

            <a href="#home" className="logo" onClick={closeMenu}>
                <i className="fas fa-mug-hot"></i>
                <span>Coffee</span>
            </a>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#menu" onClick={closeMenu}>Menu</a>
                <a href="#review" onClick={closeMenu}>Review</a>
                <a href="#book" onClick={closeMenu}>Book</a>
            </nav>

            <a href="#book" className="header-btn">
                Book a Table
                <i className="fas fa-arrow-right"></i>
            </a>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>

        </header>
    );
};

export default Header;
