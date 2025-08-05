import React from 'react';
import AnimatedSection from './AnimatedSection';


const AboutSection = () => {

    const skills = ['Java', 'Python', 'C', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React'];
    return (
        <AnimatedSection id="about">
            <h2 className="section-heading">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm Lalitha, a final-year Computer Science student at VVIT with a solid foundation in Data Structures & Algorithms and a strong interest in Computer Networks. My journey into technology is driven by a passion for applying core computer science concepts to develop reliable and efficient software.
                    </p>
                    <p>
                        Through my coursework and personal projects, I've gained hands-on experience in solving complex coding problems and building web applications. I'm always enthusiastic about learning new technologies and exploring how they can be used to create practical solutions.
                    </p>
                    <p>Here are a few technologies I'm proficient with:</p>
                    <ul className="skills-list">
                        {skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-image">
                    <div className="img-wrapper">
                         <img 
                            src="https://placehold.co/400x400/0a192f/e5e7eb?text=LG" 
                            alt="Lalitha Gowravarapu" 
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default AboutSection;
