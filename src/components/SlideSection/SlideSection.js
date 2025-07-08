import React, { useRef, useEffect, useState } from "react";
import "./SlideSection.scss";

function SlideSection({ id, children }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = ref.current;

        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.6 }
        );

        if (section) observer.observe(section);

        return () => {
        if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id={id} ref={ref} className={`slide-section ${isVisible ? "visible" : ""}`}>
        {children}
        </section>
    );
}

export default SlideSection;
