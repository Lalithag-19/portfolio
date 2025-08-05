import React from 'react';
import AnimatedSection from './AnimatedSection';
import { IconGithub } from './Icons';

// The ProjectCard component is defined within this file as it's only used here.
const ProjectCard = ({ title, description, tags, github, link }) => {
    return (
        <div className="project-card">
            <div>
                <header className="project-card-header">
                    <h3>{title}</h3>
                    <div className="project-card-links">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer"><IconGithub /></a>}
                        {/* You can add another icon for an external link here */}
                    </div>
                </header>
                <p className="description">{description}</p>
            </div>
            <footer className="tags">
                {tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </footer>
        </div>
    );
};

// The ProjectsSection component that displays the grid of projects.
const ProjectsSection = () => {
    const projects = [
        {
            title: 'Real-Time Chat App',
            description: 'This is a Python socket-based chat room project that allows multiple users to connect to a server, join or create chat rooms, and exchange messages in real time',
            tags: ['Python', 'MySQL'],
            github: 'https://github.com/Lalithag-19/chat_application_project.git',
        },
        {
            title: 'Face_Recognition',
            description: 'A face recognition system that can detect and recognize faces in images or video streams.',
            tags: ['Python', 'OpenCV', 'Face Recognition'],
            github: 'https://github.com/Lalithag-19/face_recognition.git',
        },
        {
            title: 'Portfolio Website',
            description: 'My first personal portfolio website. A fun project to learn the fundamentals of web development and responsive design.',
            tags: ['HTML', 'CSS', 'JavaScript','React'],
            github: 'https://github.com/Lalithag-19/portfolio.git',
        },
    ];

    return (
        <AnimatedSection id="projects">
            <h2 className="section-heading">Some Things I've Built</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default ProjectsSection;
