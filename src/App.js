import React, { useEffect, useState } from "react";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import SlideSection from "./components/SlideSection/SlideSection";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Success from "./components/Success/Success";
// import Reviews from "./components/Reviews/Reviews";
// import Contact from "./components/Contact/Contact";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator"; // точечная навигацию (dot navigation)
import ScrollNavigation from "./components/ScrollNavigation/ScrollNavigation";
import useScrollToSection from "./hooks/useScrollToSection"; 
import useThemeColor from "./hooks/useThemeColor";
import "./App.scss";

function App() {
    const [currentSection, setCurrentSection] = useState(0);
    const scrollToSection = useScrollToSection(setCurrentSection); // используем хук useScrollToSection
    useThemeColor(); // цвет верхней строки браузера на телефоне = цвет текущего раздела

    return (
        <div className="app">
        <BurgerMenu scrollToSection={scrollToSection} currentSection={currentSection} />
        <main>
            <SlideSection id="about" color="#fffbe0"><About /></SlideSection>
            <SlideSection id="about-me" color="#fa682f"><AboutMe /></SlideSection>
            <SlideSection id="experience" color="#43b069"><Experience /></SlideSection>
            <SlideSection id="success" color="#fffbe0"><Success /></SlideSection>
            {/* <SlideSection id="reviews"><Reviews /></SlideSection> */}
            {/* <SlideSection id="contact"><Contact /></SlideSection> */}
        </main>
        <ScrollIndicator
            current={currentSection}
            total={4}
            // total={6}
            onDotClick={scrollToSection}
        />
        <ScrollNavigation
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            totalSections={4}
            // totalSections={6}
        />
        </div>
    );
}

export default App;
