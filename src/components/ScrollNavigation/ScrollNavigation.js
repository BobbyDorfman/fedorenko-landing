import { useEffect } from "react";
import { SNAP_QUERY } from "../../hooks/useMediaQuery";

const isSnapMode = () =>
    typeof window.matchMedia === "function" && window.matchMedia(SNAP_QUERY).matches;

function ScrollNavigation({ currentSection, setCurrentSection, totalSections }) {
    // Ноутбуки и компьютеры: листание экран за экраном (колесо мыши, стрелки)
    useEffect(() => {
        let isThrottled = false;

        const scrollToSection = (index) => {
            const sections = document.querySelectorAll(".slide-section");
            if (index < 0 || index >= sections.length) return;
            setCurrentSection(index);
            sections[index].scrollIntoView({ behavior: "smooth" });
        };

        // Пока открыто всплывающее окно (сертификаты), листание секций отключено
        const isPopupOpen = () => Boolean(document.querySelector(".popup"));

        const handleScroll = (e) => {
            if (!isSnapMode() || isPopupOpen()) return;
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
            if (!isSnapMode() || isPopupOpen()) return;
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

    // Телефоны и планшеты: обычная прокрутка, а текущий раздел определяем по положению страницы
    // (нужно для подсветки пункта в меню)
    useEffect(() => {
        const update = () => {
            if (isSnapMode()) return;
            const sections = document.querySelectorAll(".slide-section");
            const middle = window.innerHeight / 2;
            let index = 0;
            sections.forEach((section, i) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= middle && rect.bottom > middle) index = i;
            });
            setCurrentSection(index);
        };

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [setCurrentSection]);

    return null;
}

export default ScrollNavigation;
