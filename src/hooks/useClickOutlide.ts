import {RefObject, useEffect} from "react";

export function useClickOutside(ref: RefObject<HTMLElement | null>, cb: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent ) {
            if (!ref || !ref.current || !event.target) {
                return;
            }

            if (!ref.current.contains(event.target as Node)) {
                cb()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
