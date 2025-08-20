import React from 'react';
import AnimatedSection from './AnimatedSection';


const AboutSection = () => {

    const skills = [
        'Java', 'Python', 'C', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React',
        'Node.js', 'MongoDB', 'Express.js', 'Git', 'Figma', 'Tailwind CSS', 'Redux', 'REST APIs', 'Bootstrap', 'Linux', 'Firebase', 'TypeScript'
    ];
    return (
        <AnimatedSection id="about">
            <h2 className="section-heading">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I’m Lalitha, a final-year Computer Science student at VVIT. My journey in tech is fueled by curiosity and a drive to solve real-world problems with code. I thrive on building reliable, user-friendly software and enjoy collaborating with others to bring ideas to life.
                    </p>
                    <p>
                        I’ve tackled a variety of projects—from real-time chat apps to face recognition systems—gaining hands-on experience in both frontend and backend development. I’m always exploring new technologies and best practices to deliver high-quality solutions.
                    </p>
                </div>
                <div className="about-image">
                    <div className="img-wrapper">
                         <img 
                            src="https://placehold.co/400x400/2563eb/e5e7eb?text=LG" 
                            alt="Lalitha Gowravarapu" 
                            style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.10)', border: '2px solid var(--primary-color)' }}
                        />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '2.5rem', width: '100%' }}>
                <h3 className="section-heading" style={{ marginBottom: '1rem', textAlign: 'right', width: '100%' }}>Skills</h3>
                <ul className="skills-list skills-list-4col" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
                    {skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
