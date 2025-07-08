const useScrollToSection = (setCurrentSection) => {
    return (index) => {
        const sections = document.querySelectorAll(".slide-section");
        if (index < 0 || index >= sections.length) return;
        setCurrentSection(index);
        sections[index].scrollIntoView({ behavior: "smooth" });
    };
};

export default useScrollToSection;