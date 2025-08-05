import React, { useEffect, useRef, useState } from 'react';

// This component uses the Intersection Observer API to add a 'visible' class
// when it comes into view, triggering a CSS animation.
const AnimatedSection = ({ children, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`animated-section ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
