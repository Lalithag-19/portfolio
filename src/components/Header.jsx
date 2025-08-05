import React from 'react';
import { IconMenu, IconX } from './Icons';

// The Header component with standard CSS classes
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
    const navLinks = ['About', 'Projects', 'Contact'];

    const scrollToSection = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    LG
                </div>
                
                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }}>
                            {link}
                        </a>
                    ))}
                    <button onClick={() => scrollToSection('Contact')} className="btn">
                        Hire Me
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="nav-mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <IconX /> : <IconMenu />}
                </button>
                
                {/* Mobile Navigation Menu */}
                <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                     {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollToSection(link); }}>
                            {link}
                        </a>
                    ))}
                    <button onClick={() => scrollToSection('Contact')} className="btn">
                        Hire Me
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
