import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Popup.scss";

function Popup({ isOpen, onClose, title, wide = false, children }) {
    const closeRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose; // всегда свежая функция, без пересоздания подписок

    // Esc закрывает окно, фокус переходит на кнопку «Закрыть»
    useEffect(() => {
        if (!isOpen) return undefined;

        const previouslyFocused = document.activeElement;
        if (closeRef.current) closeRef.current.focus();

        const onKey = (e) => {
            if (e.key === "Escape") onCloseRef.current();
        };
        window.addEventListener("keydown", onKey);

        return () => {
            window.removeEventListener("keydown", onKey);
            if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Портал в body: секции сайта имеют transform, из-за него position: fixed
    // внутри секции смещается и окно открывается криво.
    return createPortal(
        <div className="popup" onClick={onClose}>
            <div
                className={`popup__content${wide ? " popup__content--wide" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="popup__close"
                    onClick={onClose}
                    aria-label="Закрыть"
                    ref={closeRef}
                >
                    ×
                </button>
                {title && <h3 className="popup__title">{title}</h3>}
                <div className="popup__body">{children}</div>
            </div>
        </div>,
        document.body
    );
}

export default Popup;
