import { useEffect, useState } from "react";

// Режим «экран за экраном» (колесо мыши / стрелки): только на ноутбуках и компьютерах.
// На телефонах и планшетах страница прокручивается пальцем как обычно.
// Те же значения используются в стилях (global.scss, App.scss, SlideSection.scss).
export const SNAP_QUERY = "(min-width: 1025px) and (hover: hover)";

// Телефон: карточки превращаются в слайдер
export const PHONE_QUERY = "(max-width: 767px)";

const getMatch = (query) =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia(query).matches
        : false;

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => getMatch(query));

    useEffect(() => {
        if (typeof window.matchMedia !== "function") return undefined;
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();
        // Safari < 14 знает только addListener
        if (mql.addEventListener) mql.addEventListener("change", onChange);
        else mql.addListener(onChange);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener("change", onChange);
            else mql.removeListener(onChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
