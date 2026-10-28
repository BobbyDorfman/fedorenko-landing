import React, { useCallback, useEffect, useRef, useState } from "react";
import "./CardSlider.scss";

// Горизонтальный слайдер карточек для телефона: свайп пальцем + точки.
// Работает на CSS scroll-snap, внешние библиотеки не нужны.
function CardSlider({ children, label, className = "" }) {
    const trackRef = useRef(null);
    const frameRef = useRef(null);
    const [active, setActive] = useState(0);
    const slides = React.Children.toArray(children);

    // Какая карточка сейчас ближе всего к центру
    const updateActive = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDistance = Infinity;
        Array.from(track.children).forEach((el, i) => {
            const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
            if (distance < bestDistance) {
                bestDistance = distance;
                best = i;
            }
        });
        setActive(best);
    }, []);

    const onScroll = () => {
        if (frameRef.current) return;
        frameRef.current = window.requestAnimationFrame(() => {
            frameRef.current = null;
            updateActive();
        });
    };

    useEffect(() => () => {
        if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    }, []);

    const goTo = (index) => {
        const track = trackRef.current;
        const slide = track && track.children[index];
        if (!slide) return;
        track.scrollTo({
            left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`card-slider ${className}`.trim()}
            role="region"
            aria-roledescription="карусель"
            aria-label={label}
        >
            <div
                className="card-slider__track"
                ref={trackRef}
                onScroll={onScroll}
                tabIndex={0}
            >
                {slides.map((slide, i) => (
                    <div
                        className="card-slider__slide"
                        key={slide.key || i}
                        role="group"
                        aria-roledescription="слайд"
                        aria-label={`${i + 1} из ${slides.length}`}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <div className="card-slider__dots">
                    {slides.map((_, i) => (
                        <button
                            type="button"
                            key={i}
                            className={`card-slider__dot${i === active ? " is-active" : ""}`}
                            onClick={() => goTo(i)}
                            aria-label={`Карточка ${i + 1} из ${slides.length}`}
                            aria-current={i === active ? "true" : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CardSlider;
