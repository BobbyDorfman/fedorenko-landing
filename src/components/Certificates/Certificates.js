import React, { useEffect, useMemo, useState } from "react";
import "./Certificates.scss";

// Все файлы из папки src/certificates подхватываются автоматически при сборке.
// Чтобы добавить сертификат — достаточно положить файл в эту папку.
const filesContext = require.context(
    "../../certificates",
    false,
    /\.(jpe?g|png|webp|avif|gif|bmp|pdf)$/i
);

const getUrl = (key) => {
    const module = filesContext(key);
    return module && module.default ? module.default : module;
};

// Название на сайте = имя файла без расширения
const getTitle = (key) =>
    key
        .replace(/^\.\//, "")
        .replace(/\.[^.]+$/, "")
        .replace(/_+/g, " ")
        .trim();

function Certificates() {
    const items = useMemo(
        () =>
            filesContext
                .keys()
                .sort((a, b) => a.localeCompare(b, "ru", { numeric: true }))
                .map((key) => ({
                    key,
                    title: getTitle(key),
                    url: getUrl(key),
                    isPdf: /\.pdf$/i.test(key),
                })),
        []
    );

    const [activeIndex, setActiveIndex] = useState(null);
    const active = activeIndex === null ? null : items[activeIndex];

    const goPrev = () =>
        setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    const goNext = () =>
        setActiveIndex((i) => (i === null ? i : (i + 1) % items.length));

    // Стрелки влево/вправо листают сертификаты
    useEffect(() => {
        if (activeIndex === null) return undefined;
        const onKey = (e) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeIndex, items.length]);

    if (items.length === 0) {
        return (
            <p className="certificates__empty">
                Сертификаты скоро появятся.
            </p>
        );
    }

    if (active) {
        return (
            <div className="certificates__viewer">
                <div className="certificates__toolbar">
                    <button
                        type="button"
                        className="certificates__btn"
                        onClick={() => setActiveIndex(null)}
                    >
                        ← Все сертификаты
                    </button>
                    {items.length > 1 && (
                        <div className="certificates__nav">
                            <button
                                type="button"
                                className="certificates__btn"
                                onClick={goPrev}
                                aria-label="Предыдущий сертификат"
                            >
                                ‹
                            </button>
                            <span className="certificates__counter">
                                {activeIndex + 1} / {items.length}
                            </span>
                            <button
                                type="button"
                                className="certificates__btn"
                                onClick={goNext}
                                aria-label="Следующий сертификат"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>

                <h4 className="certificates__viewer-title">{active.title}</h4>

                <div className="certificates__stage">
                    {active.isPdf ? (
                        <iframe
                            key={active.url}
                            className="certificates__pdf"
                            src={active.url}
                            title={active.title}
                        />
                    ) : (
                        <img
                            key={active.url}
                            className="certificates__image"
                            src={active.url}
                            alt={active.title}
                        />
                    )}
                </div>

                <p className="certificates__hint">
                    <a href={active.url} target="_blank" rel="noopener noreferrer">
                        Открыть в новой вкладке
                    </a>
                    {active.isPdf && " — если документ не отображается выше"}
                </p>
            </div>
        );
    }

    return (
        <ul className="certificates__grid">
            {items.map((item, index) => (
                <li key={item.key}>
                    <button
                        type="button"
                        className="certificates__card"
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.isPdf ? (
                            <span className="certificates__thumb certificates__thumb--pdf" aria-hidden="true">
                                PDF
                            </span>
                        ) : (
                            <img
                                className="certificates__thumb"
                                src={item.url}
                                alt=""
                                loading="lazy"
                            />
                        )}
                        <span className="certificates__name">{item.title}</span>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Certificates;
