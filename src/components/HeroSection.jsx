import React from 'react';

// HeroSection with standard CSS classes
const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <p className="intro">Hi, my name is</p>
            <h1 className="name">Lalitha Gowaravarapu.</h1>
            <h2 className="tagline">I build things for the web.</h2>
            <p className="description">
                I'm a final-year Computer Science student with a passion for Data Structures, Algorithms, and Computer Networks. I enjoy applying core computer science concepts to solve problems and build applications.
            </p>
            <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn hero-btn"
            >
                Check out my work!
            </button>
        </section>
    );
};

export default HeroSection;
