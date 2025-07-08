import React, { useState, useEffect, useRef } from "react";
import "./BurgerMenu.scss";

function BurgerMenu({ scrollToSection, currentSection }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef(null); // чтобы не закрывалось при клике на иконку

    const toggleMenu = () => setOpen(!open);

    const handleClick = (index) => {
        scrollToSection(index);
        setOpen(false);
    };

    // Закрытие при клике вне меню
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                iconRef.current &&
                !iconRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        const handleScroll = () => {
            if (open) setOpen(false);
        };

        window.addEventListener("click", handleClickOutside);
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("touchmove", handleScroll); // для мобильных
        window.addEventListener("keydown", handleScroll); // если листают стрелками

        return () => {
            window.removeEventListener("click", handleClickOutside);
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            window.removeEventListener("keydown", handleScroll);
        };
    }, [open]);

    const menuItems = [
        { label: "Главная", index: 0, id: "about" },
        { label: "Обо мне", index: 1, id: "about-me" },
        { label: "Опыт", index: 2, id: "experience" },
        { label: "Успехи", index: 3, id: "success" },
        { label: "Отзывы", index: 4, id: "reviews" },
        { label: "Контакты", index: 5, id: "contact" }
    ];

    return (
        <div className="burger-menu">
            <div className="burger-menu__icon" onClick={toggleMenu} ref={iconRef}>
                <div className="burger-menu__line" />
                <div className="burger-menu__line" />
                <div className="burger-menu__line" />
            </div>
            {open && (
                <nav className="burger-menu__nav" ref={menuRef}>
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item.index}
                                onClick={() => handleClick(item.index)}
                                className={item.index === currentSection ? "active" : ""}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default BurgerMenu;
