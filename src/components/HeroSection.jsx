import React from 'react';

// HeroSection with standard CSS classes
const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <p className="intro">Hi,My Name is</p>
            <h1 className="name">Lalitha Gowravarapu.</h1>
            <h2 className="tagline">I craft digital experiences for the web.</h2>
            <p className="description">
                I’m a passionate Computer Science student, specializing in building modern, performant, and accessible web applications. I love transforming ideas into reality using code and am always eager to learn and grow as a developer.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn hero-btn"
                >
                    View Projects
                </button>
                <a href="#contact" className="btn hero-btn" style={{ background: '#fff', color: 'var(--primary-color)', border: '1.5px solid var(--primary-color)' }}>
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
