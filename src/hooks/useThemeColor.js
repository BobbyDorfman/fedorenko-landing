import { useEffect } from "react";

// Красит верхнюю строку браузера на телефоне (meta theme-color) в цвет раздела,
// который сейчас у верхнего края экрана. Цвет раздела задаётся в App.js (prop color у SlideSection).
// Safari на iPhone цвет подхватывает; Chrome на iPhone этот параметр игнорирует.
function useThemeColor() {
    useEffect(() => {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "theme-color");
            document.head.appendChild(meta);
        }

        let frame = null;

        const update = () => {
            frame = null;
            let color = null;
            document.querySelectorAll(".slide-section").forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 2 && rect.bottom > 2) color = section.dataset.color;
            });
            if (color && meta.getAttribute("content") !== color) {
                meta.setAttribute("content", color);
            }
        };

        const onScroll = () => {
            if (frame === null) frame = window.requestAnimationFrame(update);
        };

        // capture: на компьютере прокручивается не окно, а внутренний контейнер
        window.addEventListener("scroll", onScroll, { passive: true, capture: true });
        window.addEventListener("resize", onScroll);
        update();

        return () => {
            window.removeEventListener("scroll", onScroll, { capture: true });
            window.removeEventListener("resize", onScroll);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);
}

export default useThemeColor;
