import React from 'react';
// We are still importing the icons as before
import { IconGithub, IconLinkedin, IconMail } from './Icons';

// A simplified Footer to test direct rendering
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                {/* Instead of using a map, we will render each icon directly.
                  This helps us confirm if the icons themselves are working.
                */}
                <a href="https://github.com/Lalithag-19" target="_blank" rel="noopener noreferrer">
                    <IconGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/lalitha-gowravarapu" target="_blank" rel="noopener noreferrer">
                    <IconLinkedin size={24} />
                </a>
                <a href="mailto:lalitha120819@gmail.com" target="_blank" rel="noopener noreferrer">
                    <IconMail size={24} />
                </a>
            </div>
            <p>Designed & Built by Lalitha Gowravarapu &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
