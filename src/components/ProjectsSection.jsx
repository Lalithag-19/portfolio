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
            description: 'A Python socket-based chat room that lets users join, create rooms, and exchange messages in real time. Built with a focus on reliability and user experience.',
            tags: ['Python', 'MySQL', 'Socket.io'],
            github: 'https://github.com/Lalithag-19/chat_application_project.git',
        },
        {
            title: 'Face Recognition System',
            description: 'A robust face recognition system using OpenCV and Python, capable of detecting and recognizing faces in images and video streams.',
            tags: ['Python', 'OpenCV', 'Face Recognition'],
            github: 'https://github.com/Lalithag-19/face_recognition.git',
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website to showcase my projects, skills, and contact information. Built with React and styled for a professional look.',
            tags: ['React', 'CSS', 'JavaScript', 'Vite'],
            github: 'https://github.com/Lalithag-19/portfolio.git',
        },
        {
            title: 'Leave Management System',
            description: 'A web app for managing employee leave requests, featuring dynamic leave balance visualization.',
            tags: ['Node.js', 'Express', 'MongoDB', 'React'],
            github: 'https://github.com/Lalithag-19/Leave-Management-System.git',
        },
    ];

    return (
        <AnimatedSection id="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default ProjectsSection;
