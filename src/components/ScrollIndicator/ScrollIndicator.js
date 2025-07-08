import React from "react";
import "./ScrollIndicator.scss";
// точечная навигацию (dot navigation)

function ScrollIndicator({ current, total, onDotClick }) {
  return (
    <div className="scroll-indicator">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`dot ${idx === current ? "active" : ""}`}
          onClick={() => onDotClick(idx)}
        />
      ))}
    </div>
  );
}

export default ScrollIndicator;
