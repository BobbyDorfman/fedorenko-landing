import React from "react";
import "./Popup.scss";

function Popup({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="popup">
        <div className="popup__content">
            <button className="popup__close" onClick={onClose}>×</button>
            {title && <h3>{title}</h3>}
            <div className="popup__body">
            {children}
            </div>
        </div>
        </div>
    );
}

export default Popup;
