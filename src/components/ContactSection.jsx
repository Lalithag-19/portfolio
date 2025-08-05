import React from 'react';
import AnimatedSection from './AnimatedSection';

// ContactSection with standard CSS
const ContactSection = () => {
    return (
        <AnimatedSection id="contact">
            <div className="contact-content">
                <h2 className="contact-title">What's Next?</h2>
                <h3 className="contact-heading">Get In Touch</h3>
                <p className="contact-text">
                    I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:lalitha120819@gmail.com" className="btn">
                    Say Hello
                </a>
            </div>
        </AnimatedSection>
    );
};

export default ContactSection;
