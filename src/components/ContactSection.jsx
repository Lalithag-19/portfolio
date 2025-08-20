import React from 'react';
import AnimatedSection from './AnimatedSection';

// ContactSection with standard CSS
const ContactSection = () => {
    return (
        <AnimatedSection id="contact">
            <div className="contact-content">
                <h2 className="contact-title">Let’s Connect</h2>
                <h3 className="contact-heading">Get In Touch</h3>
                <p className="contact-text">
                    I’m always excited to connect with fellow developers, recruiters, or anyone interested in tech. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p>
                <a href="mailto:lalitha120819@gmail.com" className="btn">
                    Say Hello
                </a>
            </div>
        </AnimatedSection>
    );
};

export default ContactSection;
