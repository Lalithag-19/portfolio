import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, id, delay = 0, observerOptions = { threshold: 0.1 } }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(node);
                }
            },
            observerOptions
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [delay, observerOptions]);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`animated-section${isVisible ? ' visible' : ''}`}
            tabIndex={-1}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
