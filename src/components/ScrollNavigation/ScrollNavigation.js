import { useEffect } from "react";

function ScrollNavigation({ currentSection, setCurrentSection, totalSections }) {
    useEffect(() => {
        let isThrottled = false;

        const scrollToSection = (index) => {
            const sections = document.querySelectorAll(".slide-section");
            if (index < 0 || index >= sections.length) return;
            setCurrentSection(index);
            sections[index].scrollIntoView({ behavior: "smooth" });
        };

        const handleScroll = (e) => {
            if (isThrottled) return;
            isThrottled = true;

            if (e.deltaY > 50) {
                scrollToSection(currentSection + 1);
            } else if (e.deltaY < -50) {
                scrollToSection(currentSection - 1);
            }

            setTimeout(() => {
                isThrottled = false;
            }, 1000);
        };

        const handleKeyDown = (e) => {
            if (isThrottled) return;
            const key = e.key.toLowerCase();

            const goNext = () => {
                isThrottled = true;
                scrollToSection(currentSection + 1);
                setTimeout(() => { isThrottled = false; }, 1000);
            };

            const goPrev = () => {
                isThrottled = true;
                scrollToSection(currentSection - 1);
                setTimeout(() => { isThrottled = false; }, 1000);
            };

            if (["arrowdown", "pagedown", "s"].includes(key)) {
                goNext();
            }
            if (["arrowup", "pageup", "w"].includes(key)) {
                goPrev();
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentSection, setCurrentSection, totalSections]);

    return null;
}

export default ScrollNavigation;
